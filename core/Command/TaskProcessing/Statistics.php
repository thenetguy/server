<?php
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OC\Core\Command\TaskProcessing;

use OC\Core\Command\Base;
use OCP\TaskProcessing\IManager;
use OCP\TaskProcessing\Task;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class Statistics extends Base {
	public function __construct(
		protected IManager $taskProcessingManager,
	) {
		parent::__construct();
	}

	protected function configure() {
		$this
			->setName('taskprocessing:task:stats')
			->setDescription('get statistics for tasks')
			->addOption(
				'userIdFilter',
				'u',
				InputOption::VALUE_OPTIONAL,
				'only get the tasks for one user ID'
			)
			->addOption(
				'type',
				't',
				InputOption::VALUE_OPTIONAL,
				'only get the tasks for one task type'
			)
			->addOption(
				'customId',
				null,
				InputOption::VALUE_OPTIONAL,
				'only get the tasks for one custom ID'
			)
			->addOption(
				'status',
				's',
				InputOption::VALUE_OPTIONAL,
				'only get the tasks that have a specific status (STATUS_UNKNOWN=0, STATUS_SCHEDULED=1, STATUS_RUNNING=2, STATUS_SUCCESSFUL=3, STATUS_FAILED=4, STATUS_CANCELLED=5)'
			)
			->addOption(
				'scheduledAfter',
				null,
				InputOption::VALUE_OPTIONAL,
				'only get the tasks that were scheduled after a specific date (Unix timestamp)'
			)
			->addOption(
				'endedBefore',
				null,
				InputOption::VALUE_OPTIONAL,
				'only get the tasks that ended before a specific date (Unix timestamp)'
			);
		parent::configure();
	}

	protected function execute(InputInterface $input, OutputInterface $output): int {
		$userIdFilter = $input->getOption('userIdFilter');
		if ($userIdFilter === null) {
			$userIdFilter = '';
		} elseif ($userIdFilter === '') {
			$userIdFilter = null;
		}
		$type = $input->getOption('type');
		$customId = $input->getOption('customId');
		$status = $input->getOption('status');
		$scheduledAfter = $input->getOption('scheduledAfter');
		$endedBefore = $input->getOption('endedBefore');

		$tasks = $this->taskProcessingManager->getTasks($userIdFilter, $type, $customId, $status, $scheduledAfter, $endedBefore);

		$stats = ['Number of tasks' => count($tasks)];

		$maxRunningTime = 0;
		$totalRunningTime = 0;
		$runningTimeCount = 0;

		$maxQueuingTime = 0;
		$totalQueuingTime = 0;
		$queuingTimeCount = 0;

		$maxUserWaitingTime = 0;
		$totalUserWaitingTime = 0;
		$userWaitingTimeCount = 0;
		foreach ($tasks as $task) {
			// running time
			if ($task->getStartedAt() !== null && $task->getEndedAt() !== null) {
				$taskRunningTime = $task->getEndedAt() - $task->getStartedAt();
				$totalRunningTime += $taskRunningTime;
				$runningTimeCount++;
				if ($taskRunningTime >= $maxRunningTime) {
					$maxRunningTime = $taskRunningTime;
				}
			}
			// queuing time
			if ($task->getScheduledAt() !== null && $task->getStartedAt() !== null) {
				$taskQueuingTime = $task->getStartedAt() - $task->getScheduledAt();
				$totalQueuingTime += $taskQueuingTime;
				$queuingTimeCount++;
				if ($taskQueuingTime >= $maxQueuingTime) {
					$maxQueuingTime = $taskQueuingTime;
				}
			}
			// user waiting time
			if ($task->getScheduledAt() !== null && $task->getEndedAt() !== null) {
				$taskUserWaitingTime = $task->getEndedAt() - $task->getScheduledAt();
				$totalUserWaitingTime += $taskUserWaitingTime;
				$userWaitingTimeCount++;
				if ($taskUserWaitingTime >= $maxUserWaitingTime) {
					$maxUserWaitingTime = $taskUserWaitingTime;
				}
			}
		}

		if ($runningTimeCount > 0) {
			$stats['Max running time'] = $maxRunningTime;
			$averageRunningTime = (int)($totalRunningTime / $runningTimeCount);
			$stats['Average running time'] = $averageRunningTime;
			$stats['Running time count'] = $runningTimeCount;
		}
		if ($queuingTimeCount > 0) {
			$stats['Max queuing time'] = $maxQueuingTime;
			$averageQueuingTime = (int)($totalQueuingTime / $queuingTimeCount);
			$stats['Average queuing time'] = $averageQueuingTime;
			$stats['Queuing time count'] = $queuingTimeCount;
		}
		if ($userWaitingTimeCount > 0) {
			$stats['Max user waiting time'] = $maxUserWaitingTime;
			$averageUserWaitingTime = (int)($totalUserWaitingTime / $userWaitingTimeCount);
			$stats['Average user waiting time'] = $averageUserWaitingTime;
			$stats['User waiting time count'] = $userWaitingTimeCount;
		}

		$this->writeArrayInOutputFormat($input, $output, $stats);
		return 0;
	}
}
