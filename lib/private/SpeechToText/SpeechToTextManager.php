<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023 Julius Härtl <jus@bitgrid.net>
 * @copyright Copyright (c) 2023 Marcel Klehr <mklehr@gmx.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Marcel Klehr <mklehr@gmx.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */


namespace OC\SpeechToText;

use InvalidArgumentException;
use OC\AppFramework\Bootstrap\Coordinator;
use OCP\BackgroundJob\IJobList;
use OCP\Files\File;
use OCP\Files\InvalidPathException;
use OCP\Files\NotFoundException;
use OCP\IServerContainer;
use OCP\PreConditionNotMetException;
use OCP\SpeechToText\ISpeechToTextManager;
use OCP\SpeechToText\ISpeechToTextProvider;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Psr\Log\LoggerInterface;
use Throwable;

class SpeechToTextManager implements ISpeechToTextManager {
	/** @var ?ISpeechToTextProvider[] */
	private ?array $providers = null;

	public function __construct(
		private IServerContainer $serverContainer,
		private Coordinator $coordinator,
		private LoggerInterface $logger,
		private IJobList $jobList,
	) {
	}

	public function getProviders(): array {
		$context = $this->coordinator->getRegistrationContext();
		if ($context === null) {
			return [];
		}

		if ($this->providers !== null) {
			return $this->providers;
		}

		$this->providers = [];

		foreach ($context->getSpeechToTextProviders() as $providerRegistration) {
			$class = $providerRegistration->getService();
			try {
				$this->providers[$class] = $this->serverContainer->get($class);
			} catch (NotFoundExceptionInterface|ContainerExceptionInterface|Throwable $e) {
				$this->logger->error('Failed to load SpeechToText provider ' . $class, [
					'exception' => $e
				]);
			}
		}

		return $this->providers;
	}

	public function hasProviders(): bool {
		$context = $this->coordinator->getRegistrationContext();
		if ($context === null) {
			return false;
		}
		return !empty($context->getSpeechToTextProviders());
	}

	public function scheduleFileTranscription(File $file): void {
		if (!$this->hasProviders()) {
			throw new PreConditionNotMetException('No SpeechToText providers have been registered');
		}
		try {
			if ($this->jobList->has(TranscriptionJob::class, ['fileId' => $file->getId()])) {
				return;
			}
			$this->jobList->add(TranscriptionJob::class, ['fileId' => $file->getId()]);
		} catch (NotFoundException|InvalidPathException $e) {
			throw new InvalidArgumentException('Invalid file provided for file transcription: ' . $e->getMessage());
		}
	}

	public function transcribeFile(File $file): string {
		$provider = current($this->getProviders());
		if (!$provider) {
			throw new PreConditionNotMetException('No SpeechToText providers have been registered');
		}

		try {
			return $provider->transcribeFile($file);
		} catch (\Throwable $e) {
			$this->logger->info('SpeechToText transcription failed', ['exception' => $e]);
			throw new \RuntimeException('SpeechToText transcription failed: ' . $e->getMessage());
		}
	}
}
