/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createClient } from 'webdav'
import { generateRemoteUrl } from '@nextcloud/router'
import { getCurrentUser, getRequestToken, onRequestTokenUpdate } from '@nextcloud/auth'

// init webdav client
export const rootPath = `/trashbin/${getCurrentUser()?.uid}/trash`
export const rootUrl = generateRemoteUrl('dav' + rootPath)
const client = createClient(rootUrl)

// set CSRF token header
const setHeaders = (token: string | null) => {
	client.setHeaders({
		// Add this so the server knows it is an request from the browser
		'X-Requested-With': 'XMLHttpRequest',
		// Inject user auth
		requesttoken: token ?? '',
	})
}

// refresh headers when request token changes
onRequestTokenUpdate(setHeaders)
setHeaders(getRequestToken())

export default client
