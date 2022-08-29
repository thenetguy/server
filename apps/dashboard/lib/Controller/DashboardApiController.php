<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2021 Julien Veyssier <eneiluj@posteo.net>
 *
 * @author Julien Veyssier <eneiluj@posteo.net>
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
 *
 */

namespace OCA\Dashboard\Controller;

use OCP\AppFramework\OCSController;
use OCP\AppFramework\Http\DataResponse;
use OCP\Dashboard\IButtonWidget;
use OCP\Dashboard\IIconWidget;
use OCP\Dashboard\IManager;
use OCP\Dashboard\IWidget;
use OCP\IConfig;
use OCP\IRequest;

use OCP\Dashboard\IAPIWidget;
use OCP\Dashboard\Model\WidgetItem;

class DashboardApiController extends OCSController {

	/** @var IManager */
	private $dashboardManager;
	/** @var IConfig */
	private $config;
	/** @var string|null */
	private $userId;

	public function __construct(
		string $appName,
		IRequest $request,
		IManager $dashboardManager,
		IConfig $config,
		?string $userId
	) {
		parent::__construct($appName, $request);

		$this->dashboardManager = $dashboardManager;
		$this->config = $config;
		$this->userId = $userId;
	}

	/**
	 * Example request with Curl:
	 * curl -u user:passwd http://my.nc/ocs/v2.php/apps/dashboard/api/v1/widget-items -H Content-Type:application/json -X GET -d '{"sinceIds":{"github_notifications":"2021-03-22T15:01:10Z"}}'
	 *
	 * @param array $sinceIds Array indexed by widget Ids, contains date/id from which we want the new items
	 * @param int $limit Limit number of result items per widget
	 * @param string[] $widgets Limit results to specific widgets
	 *
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function getWidgetItems(array $sinceIds = [], int $limit = 7, array $widgets = []): DataResponse {
		$showWidgets = $widgets;
		$items = [];

		if ($showWidgets === []) {
			$systemDefault = $this->config->getAppValue('dashboard', 'layout', 'recommendations,spreed,mail,calendar');
			$showWidgets = explode(',', $this->config->getUserValue($this->userId, 'dashboard', 'layout', $systemDefault));
		}

		$widgets = $this->dashboardManager->getWidgets();
		foreach ($widgets as $widget) {
			if ($widget instanceof IAPIWidget && in_array($widget->getId(), $showWidgets)) {
				$items[$widget->getId()] = array_map(function (WidgetItem $item) {
					return $item->jsonSerialize();
				}, $widget->getItems($this->userId, $sinceIds[$widget->getId()] ?? null, $limit));
			}
		}

		return new DataResponse($items);
	}

	/**
	 * Example request with Curl:
	 * curl -u user:passwd http://my.nc/ocs/v2.php/apps/dashboard/api/v1/widgets
	 *
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function getWidgets(): DataResponse {
		$widgets = $this->dashboardManager->getWidgets();

		$items = array_map(function (IWidget $widget) {
			$data = [
				'id' => $widget->getId(),
				'title' => $widget->getTitle(),
				'order' => $widget->getOrder(),
				'icon_class' => $widget->getIconClass(),
				'icon_url' => ($widget instanceof IIconWidget) ? $widget->getIconUrl() : '',
				'widget_url' => $widget->getUrl(),
			];
			if ($widget instanceof IButtonWidget) {
				$data += [
					'button' => [
						'text' => $widget->getButtonText(),
						'icon_url' => $widget->getButtonIconUrl(),
						'url' => $widget->getUrl(),
					],
				];
			}
			return $data;
		}, $widgets);

		return new DataResponse($items);
	}
}
