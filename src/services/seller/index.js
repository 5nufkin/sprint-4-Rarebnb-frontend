const { DEV, VITE_LOCAL } = import.meta.env

import { sellerService as local } from './seller.service.local'
// import { sellerService as remote } from './seller.service.remote'

export const sellerService = (VITE_LOCAL === 'true')? local : remote

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.reviewService = sellerService
