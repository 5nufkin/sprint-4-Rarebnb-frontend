const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { orderService as local } from './order.service.local'
import { orderService as remote } from './order.service.remote'

function getEmptyOrder(stayId) {
  return {
    stay: {
      _id: stayId
    },
    startDate: '',
    endDate: '',
    startDate: '',
    guests: { adults: 1, children: 0, infants: 0, pets: 0 },
    totalPrice: 0,
  }
}

const service = (VITE_LOCAL === 'true') ? local : remote
export const orderService = { getEmptyOrder, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.orderService = orderService
