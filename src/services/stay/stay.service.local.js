import { storageService } from '../async-storage.service'
import { loadFromStorage, makeId, saveToStorage } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'stayDB'

export const stayService = {
  query,
  getById,
  save,
  remove,
  addStayMsg,
  getStayAddressStr,
}

const gStays = [
  // {
  //   _id: 's101',
  //   name: 'Ribeira Charming Duplex',
  //   type: 'House',
  //   avgRating: 4.82,
  //   bedCount: 2,
  //   imgUrls: ['https://picsum.photos/300/200'],
  //   price: 80.0,
  //   summary: 'Fantastic duplex apartment with river view.',
  //   capacity: 8,
  //   amenities: ['TV', 'Wifi', 'Kitchen'],
  //   labels: ['Trending', 'Top of the world'],
  //   host: {
  //     _id: 'u101',
  //     fullname: 'Davit Pok',
  //     imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25.jpg',
  //   },
  //   loc: {
  //     country: 'Portugal',
  //     countryCode: 'PT',
  //     city: 'Lisbon',
  //     address: '17 Kombo st',
  //     lat: 41.1413,
  //     lng: -8.61308,
  //   },
  //   reviews: [],
  //   likedByUsers: [],
  // },
  {
    _id: 's101',
    name: 'Ribeira Charming Duplex',
    type: '',
    avgRating: 4.88,
    bedCount: 2,
    imgUrls: ['https://picsum.photos/300/200'],
    price: 184,
    summary: 'Near Jerusalem Beach, Tel Aviv',
    capacity: 8,
    amenities: ['TV', 'Wifi', 'Kitchen'],
    labels: ['Trending', 'Top of the world'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25.jpg',
    },
    loc: {
      country: 'Israel',
      countryCode: 'PT',
      city: 'Tel Aviv-Yafo',
      address: '17 Kombo st',
      lat: 41.1413,
      lng: -8.61308,
    },
    reviews: [],
    likedByUsers: [],
  },
  {
    _id: 's102',
    name: 'Urban Studio Retreat',
    type: 'Apartment',
    avgRating: 4.52,
    bedCount: 1,
    imgUrls: ['https://picsum.photos/200/300?1'],
    price: 110,
    summary: 'Cozy downtown apartment near shopping district.',
    capacity: 2,
    amenities: ['AC', 'Wifi', 'Elevator'],
    labels: ['City vibes'],
    host: {
      _id: 'u102',
      fullname: 'Lina Mor',
      imgUrl: 'https://i.pravatar.cc/100?img=10',
    },
    loc: {
      country: 'Germany',
      countryCode: 'DE',
      city: 'Berlin',
      address: '23 Mitte Ave',
      lat: 52.52,
      lng: 13.405,
    },
    reviews: [],
    likedByUsers: [],
  },
  {
    _id: 's103',
    name: 'Tropical Bungalow Hideout',
    type: 'Cabin',
    avgRating: 4.21,
    bedCount: 1,
    imgUrls: ['https://picsum.photos/200/300?2'],
    price: 150,
    summary: 'Relax in a lush tropical escape.',
    capacity: 4,
    amenities: ['Pool', 'BBQ', 'Wifi'],
    labels: ['Tropical', 'Trending'],
    host: {
      _id: 'u103',
      fullname: 'Jon Doe',
      imgUrl: 'https://i.pravatar.cc/100?img=12',
    },
    loc: {
      country: 'Thailand',
      countryCode: 'TH',
      city: 'Phuket',
      address: '101 Beach Dr',
      lat: 7.88,
      lng: 98.39,
    },
    reviews: [],
    likedByUsers: [],
  },
  {
    _id: 's104',
    name: 'Mountain Cabin Escape',
    type: 'Cabin',
    avgRating: 4.62,
    bedCount: 5,
    imgUrls: ['https://picsum.photos/200/300?3'],
    price: 95,
    summary: 'Quiet retreat in the snowy mountains.',
    capacity: 6,
    amenities: ['Fireplace', 'Kitchen', 'TV'],
    labels: ['Play', 'Top of the world'],
    host: {
      _id: 'u104',
      fullname: 'Alex Smith',
      imgUrl: 'https://i.pravatar.cc/100?img=15',
    },
    loc: {
      country: 'Canada',
      countryCode: 'CA',
      city: 'Whistler',
      address: '89 Peak Rd',
      lat: 50.12,
      lng: -122.95,
    },
    reviews: [],
    likedByUsers: [],
  },
  {
    _id: 's105',
    name: 'Minimal Loft Studio',
    type: 'Apartment',
    avgRating: 4.56,
    bedCount: 1,
    imgUrls: ['https://picsum.photos/200/300?4'],
    price: 70,
    summary: 'Bright and modern loft with open space.',
    capacity: 3,
    amenities: ['Wifi', 'Kitchen'],
    labels: ['Trending'],
    host: {
      _id: 'u105',
      fullname: 'Maya Lin',
      imgUrl: 'https://i.pravatar.cc/100?img=25',
    },
    loc: {
      country: 'USA',
      countryCode: 'US',
      city: 'New York',
      address: '456 Flatiron St',
      lat: 40.741,
      lng: -73.989,
    },
    reviews: [],
    likedByUsers: [],
  },
  {
    _id: 's106',
    name: 'Eco-Friendly Treehouse',
    type: 'House',
    avgRating: 4.82,
    bedCount: 4,
    imgUrls: ['https://picsum.photos/200/300?5'],
    price: 200,
    summary: 'Live among the trees in this sustainable stay.',
    capacity: 2,
    amenities: ['Compost toilet', 'Solar power'],
    labels: ['Eco', 'Play'],
    host: {
      _id: 'u106',
      fullname: 'Leo Rain',
      imgUrl: 'https://i.pravatar.cc/100?img=30',
    },
    loc: {
      country: 'Costa Rica',
      countryCode: 'CR',
      city: 'Monteverde',
      address: 'Tree Trail 9',
      lat: 10.31,
      lng: -84.82,
    },
    reviews: [],
    likedByUsers: [],
  },
  {
    _id: 's107',
    name: 'Beachfront Paradise',
    type: 'Villa',
    avgRating: 4.65,
    bedCount: 4,
    imgUrls: ['https://picsum.photos/200/300?6'],
    price: 300,
    summary: 'Step directly onto the sand from your patio.',
    capacity: 5,
    amenities: ['Pool', 'Wifi', 'Kitchen'],
    labels: ['Tropical', 'Top of the world'],
    host: {
      _id: 'u107',
      fullname: 'Sophie Tran',
      imgUrl: 'https://i.pravatar.cc/100?img=31',
    },
    loc: {
      country: 'Greece',
      countryCode: 'GR',
      city: 'Santorini',
      address: '1 Beach Dr',
      lat: 36.3932,
      lng: 25.4615,
    },
    reviews: [],
    likedByUsers: [],
  },
  {
    _id: 's108',
    name: 'Lakeview Cottage',
    type: 'House',
    avgRating: 4.8,
    bedCount: 5,
    imgUrls: ['https://picsum.photos/200/300?7'],
    price: 120,
    summary: 'Rustic charm with modern amenities.',
    capacity: 4,
    amenities: ['BBQ', 'Lake Access', 'Fireplace'],
    labels: ['Play', 'Relax'],
    host: {
      _id: 'u108',
      fullname: 'Rachel Green',
      imgUrl: 'https://i.pravatar.cc/100?img=32',
    },
    loc: {
      country: 'Switzerland',
      countryCode: 'CH',
      city: 'Lucerne',
      address: '45 Lakeside Way',
      lat: 47.0502,
      lng: 8.3093,
    },
    reviews: [],
    likedByUsers: [],
  },
  {
    _id: 's109',
    name: 'Old Town Gem',
    type: 'Apartment',
    avgRating: 4.85,
    bedCount: 6,
    imgUrls: ['https://picsum.photos/200/300?8'],
    price: 90,
    summary: 'Live like a local in the city’s historic core.',
    capacity: 2,
    amenities: ['Kitchen', 'Wifi'],
    labels: ['Trending'],
    host: {
      _id: 'u109',
      fullname: 'Marcus Klein',
      imgUrl: 'https://i.pravatar.cc/100?img=33',
    },
    loc: {
      country: 'Czech Republic',
      countryCode: 'CZ',
      city: 'Prague',
      address: '12 Castle St',
      lat: 50.0755,
      lng: 14.4378,
    },
    reviews: [],
    likedByUsers: [],
  },
  {
    _id: 's110',
    name: 'Bohemian Rooftop Loft',
    type: 'Loft',
    avgRating: 4.7,
    bedCount: 3,
    imgUrls: ['https://picsum.photos/200/300?9'],
    price: 105,
    summary: 'Artful living with a rooftop view.',
    capacity: 2,
    amenities: ['Wifi', 'Air Conditioning', 'Coffee Maker'],
    labels: ['Top of the world'],
    host: {
      _id: 'u110',
      fullname: 'Ella Voss',
      imgUrl: 'https://i.pravatar.cc/100?img=34',
    },
    loc: {
      country: 'Spain',
      countryCode: 'ES',
      city: 'Barcelona',
      address: '99 Gracia Rd',
      lat: 41.3851,
      lng: 2.1734,
    },
    reviews: [],
    likedByUsers: [],
  },
]


window.cs = stayService
_createStays()

async function query(filterBy = { txt: '', minPrice: 0 }) {
  var stays = await storageService.query(STORAGE_KEY)
  const { txt, minPrice, sortField, sortDir } = filterBy

  if (txt) {
    const regex = new RegExp(filterBy.txt, 'i')
    stays = stays.filter(stay => regex.test(stay.name) || regex.test(stay.description))
  }
  if (minPrice) {
    stays = stays.filter(stay => stay.price >= minPrice)
  }
  if (sortField === 'name') {
    stays.sort((stay1, stay2) =>
      stay1[sortField].localeCompare(stay2[sortField]) * +sortDir)
  }
  if (sortField === 'price') {
    stays.sort((stay1, stay2) =>
      (stay1[sortField] - stay2[sortField]) * +sortDir)
  }

  // stays = stays.map(({ _id, name, price, host, imgUrls }) => ({ _id, name, price, host, imgUrls }))
  return stays
}

function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
  // throw new Error('Nope')
  await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
  var savedStay
  if (stay._id) {
    const stayToSave = {
      _id: stay._id,
      price: stay.price
    }
    savedStay = await storageService.put(STORAGE_KEY, stayToSave)
  } else {
    const stayToSave = {
      name: stay.name,
      price: stay.price,
      // Later, owner is set by the backend
      owner: userService.getLoggedinUser(),
      msgs: []
    }
    savedStay = await storageService.post(STORAGE_KEY, stayToSave)
  }
  return savedStay
}

async function addStayMsg(stayId, txt) {
  // Later, this is all done by the backend
  const stay = await getById(stayId)

  const msg = {
    id: makeId(),
    by: userService.getLoggedinUser(),
    txt
  }
  stay.msgs.push(msg)
  await storageService.put(STORAGE_KEY, stay)

  return msg
}

function _createStays() {
  let stays = loadFromStorage(STORAGE_KEY)
  if (!stays || !stays.length) {
    saveToStorage(STORAGE_KEY, gStays)
  }
}

function getStayAddressStr(stay) {
  if (!stay.loc) return ''
  const { city, country } = stay.loc
  return stay.type ? `${stay.type} in ${city}, ${country}` : `${city}, ${country} `
}