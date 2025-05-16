import { storageService } from "../async-storage.service"
// import { userService } from '../user'

export const sellerService = {
  getDashboardStats,
  getSalesByCountry,
  query,
  remove,
}

export const sales = [
  {
    id: "s300",
    product: "Garden Suite",
    customer: "Alice",
    price: 133.02,
    bookingStatus: {
      status: "completed",
      bookedAt: "29/11/2022",
      checkIn: "06/12/2022",
      checkOut: "09/12/2022",
    },
    location: {
      city: "São Paulo",
      country: "Brazil",
    },
  },
  {
    id: "s301",
    product: "Urban Loft",
    customer: "Tom",
    price: 203.09,
    bookingStatus: {
      status: "completed",
      bookedAt: "22/12/2024",
      checkIn: "29/12/2024",
      checkOut: "01/01/2025",
    },
    location: {
      city: "Moscow",
      country: "Russia",
    },
  },
  {
    id: "s302",
    product: "Sea View Apartment",
    customer: "Lior",
    price: 187.67,
    bookingStatus: {
      status: "refunded",
      bookedAt: "01/02/2024",
      checkIn: "08/02/2024",
      checkOut: "11/02/2024",
    },
    location: {
      city: "Mexico City",
      country: "Mexico",
    },
  },
  {
    id: "s303",
    product: "Cozy Flat",
    customer: "John",
    price: 147.46,
    bookingStatus: {
      status: "completed",
      bookedAt: "19/04/2022",
      checkIn: "26/04/2022",
      checkOut: "29/04/2022",
    },
    location: {
      city: "Berlin",
      country: "Germany",
    },
  },
  {
    id: "s304",
    product: "Garden Suite",
    customer: "John",
    price: 285.57,
    bookingStatus: {
      status: "refunded",
      bookedAt: "05/12/2023",
      checkIn: "12/12/2023",
      checkOut: "15/12/2023",
    },
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s440",
    product: "Sea View Apartment",
    customer: "Dana",
    price: 134.23,
    bookingStatus: {
      status: "refunded",
      bookedAt: "17/02/2023",
      checkIn: "24/02/2023",
      checkOut: "27/02/2023",
    },
    location: {
      city: "Rome",
      country: "Italy",
    },
  },
  {
    id: "s441",
    product: "Big Castel",
    customer: "Lior",
    price: 156.59,
    bookingStatus: {
      status: "completed",
      bookedAt: "23/07/2023",
      checkIn: "30/07/2023",
      checkOut: "02/08/2023",
    },
    location: {
      city: "Barcelona",
      country: "Spain",
    },
  },
  {
    id: "s442",
    product: "Garden Suite",
    customer: "Bob",
    price: 214.22,
    bookingStatus: {
      status: "completed",
      bookedAt: "21/03/2023",
      checkIn: "28/03/2023",
      checkOut: "02/04/2023",
    },
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s443",
    product: "Big Castel",
    customer: "Dana",
    price: 177.7,
    bookingStatus: {
      status: "completed",
      bookedAt: "08/01/2023",
      checkIn: "15/01/2023",
      checkOut: "18/01/2023",
    },
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s444",
    product: "Cozy Flat",
    customer: "John",
    price: 157.31,
    bookingStatus: {
      status: "completed",
      bookedAt: "04/12/2023",
      checkIn: "11/12/2023",
      checkOut: "16/12/2023",
    },
    location: {
      city: "Istanbul",
      country: "Turkey",
    },
  },
  {
    id: "s445",
    product: "Garden Suite",
    customer: "Moshe",
    price: 193.15,
    bookingStatus: {
      status: "refunded",
      bookedAt: "20/05/2023",
      checkIn: "27/05/2023",
      checkOut: "31/05/2023",
    },
    location: {
      city: "Berlin",
      country: "Germany",
    },
  },
  {
    id: "s446",
    product: "Big Castel",
    customer: "John",
    price: 195.33,
    bookingStatus: {
      status: "refunded",
      bookedAt: "02/12/2023",
      checkIn: "09/12/2023",
      checkOut: "11/12/2023",
    },
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s447",
    product: "Garden Suite",
    customer: "Lea",
    price: 252.7,
    bookingStatus: {
      status: "refunded",
      bookedAt: "18/04/2023",
      checkIn: "25/04/2023",
      checkOut: "30/04/2023",
    },
    location: {
      city: "Barcelona",
      country: "Spain",
    },
  },
  {
    id: "s448",
    product: "Sea View Apartment",
    customer: "Rami",
    price: 237.87,
    bookingStatus: {
      status: "refunded",
      bookedAt: "10/09/2023",
      checkIn: "17/09/2023",
      checkOut: "21/09/2023",
    },
    location: {
      city: "Mexico City",
      country: "Mexico",
    },
  },
  {
    id: "s449",
    product: "City Room",
    customer: "Bob",
    price: 259.34,
    bookingStatus: {
      status: "refunded",
      bookedAt: "12/04/2023",
      checkIn: "19/04/2023",
      checkOut: "24/04/2023",
    },
    location: {
      city: "Istanbul",
      country: "Turkey",
    },
  },
  {
    id: "s450",
    product: "Sea View Apartment",
    customer: "Bob",
    price: 267.33,
    bookingStatus: {
      status: "refunded",
      bookedAt: "06/04/2023",
      checkIn: "13/04/2023",
      checkOut: "18/04/2023",
    },
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s451",
    product: "City Room",
    customer: "John",
    price: 101.54,
    bookingStatus: {
      status: "refunded",
      bookedAt: "20/06/2023",
      checkIn: "27/06/2023",
      checkOut: "02/07/2023",
    },
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s452",
    product: "Cozy Flat",
    customer: "Moshe",
    price: 274.71,
    bookingStatus: {
      status: "refunded",
      bookedAt: "21/04/2023",
      checkIn: "28/04/2023",
      checkOut: "01/05/2023",
    },
    location: {
      city: "Mexico City",
      country: "Mexico",
    },
  },
  {
    id: "s453",
    product: "Sea View Apartment",
    customer: "Rami",
    price: 200.96,
    bookingStatus: {
      status: "completed",
      bookedAt: "12/12/2023",
      checkIn: "19/12/2023",
      checkOut: "23/12/2023",
    },
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s454",
    product: "Cozy Flat",
    customer: "Lea",
    price: 245.2,
    bookingStatus: {
      status: "refunded",
      bookedAt: "06/05/2023",
      checkIn: "13/05/2023",
      checkOut: "18/05/2023",
    },
    location: {
      city: "Sydney",
      country: "Australia",
    },
  },
  {
    id: "s455",
    product: "Urban Loft",
    customer: "Alice",
    price: 294.43,
    bookingStatus: {
      status: "completed",
      bookedAt: "23/01/2023",
      checkIn: "30/01/2023",
      checkOut: "04/02/2023",
    },
    location: {
      city: "Dubai",
      country: "UAE",
    },
  },
  {
    id: "s456",
    product: "Urban Loft",
    customer: "Rami",
    price: 102.25,
    bookingStatus: {
      status: "refunded",
      bookedAt: "21/07/2023",
      checkIn: "28/07/2023",
      checkOut: "01/08/2023",
    },
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s457",
    product: "Cozy Flat",
    customer: "Lea",
    price: 241.74,
    bookingStatus: {
      status: "completed",
      bookedAt: "21/01/2023",
      checkIn: "28/01/2023",
      checkOut: "30/01/2023",
    },
    location: {
      city: "Berlin",
      country: "Germany",
    },
  },
  {
    id: "s458",
    product: "Cozy Flat",
    customer: "Tom",
    price: 107.95,
    bookingStatus: {
      status: "refunded",
      bookedAt: "22/06/2023",
      checkIn: "29/06/2023",
      checkOut: "02/07/2023",
    },
    location: {
      city: "Berlin",
      country: "Germany",
    },
  },
  {
    id: "s459",
    product: "City Room",
    customer: "Noa",
    price: 109.31,
    bookingStatus: {
      status: "completed",
      bookedAt: "12/09/2023",
      checkIn: "19/09/2023",
      checkOut: "22/09/2023",
    },
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s460",
    product: "Big Castel",
    customer: "Rami",
    price: 261.59,
    bookingStatus: {
      status: "completed",
      bookedAt: "09/06/2023",
      checkIn: "16/06/2023",
      checkOut: "20/06/2023",
    },
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s461",
    product: "Garden Suite",
    customer: "Lea",
    price: 262.53,
    bookingStatus: {
      status: "completed",
      bookedAt: "05/07/2023",
      checkIn: "12/07/2023",
      checkOut: "15/07/2023",
    },
    location: {
      city: "Barcelona",
      country: "Spain",
    },
  },
  {
    id: "s462",
    product: "Garden Suite",
    customer: "Dana",
    price: 163.44,
    bookingStatus: {
      status: "completed",
      bookedAt: "01/08/2023",
      checkIn: "08/08/2023",
      checkOut: "10/08/2023",
    },
    location: {
      city: "Tel Aviv",
      country: "Israel",
    },
  },
  {
    id: "s463",
    product: "Garden Suite",
    customer: "Dana",
    price: 253.94,
    bookingStatus: {
      status: "completed",
      bookedAt: "12/07/2023",
      checkIn: "19/07/2023",
      checkOut: "24/07/2023",
    },
    location: {
      city: "Rome",
      country: "Italy",
    },
  },
  {
    id: "s464",
    product: "City Room",
    customer: "John",
    price: 299.62,
    bookingStatus: {
      status: "completed",
      bookedAt: "15/01/2023",
      checkIn: "22/01/2023",
      checkOut: "26/01/2023",
    },
    location: {
      city: "Berlin",
      country: "Germany",
    },
  },
  {
    id: "s465",
    product: "City Room",
    customer: "Noa",
    price: 233.33,
    bookingStatus: {
      status: "completed",
      bookedAt: "22/04/2023",
      checkIn: "29/04/2023",
      checkOut: "03/05/2023",
    },
    location: {
      city: "Sydney",
      country: "Australia",
    },
  },
  {
    id: "s466",
    product: "Sea View Apartment",
    customer: "Bob",
    price: 113.15,
    bookingStatus: {
      status: "completed",
      bookedAt: "03/11/2023",
      checkIn: "10/11/2023",
      checkOut: "14/11/2023",
    },
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s467",
    product: "City Room",
    customer: "John",
    price: 210.91,
    bookingStatus: {
      status: "completed",
      bookedAt: "11/07/2023",
      checkIn: "18/07/2023",
      checkOut: "21/07/2023",
    },
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s468",
    product: "Urban Loft",
    customer: "Alice",
    price: 298.96,
    bookingStatus: {
      status: "completed",
      bookedAt: "01/12/2023",
      checkIn: "08/12/2023",
      checkOut: "13/12/2023",
    },
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s469",
    product: "Big Castel",
    customer: "Bob",
    price: 205.5,
    bookingStatus: {
      status: "completed",
      bookedAt: "14/11/2023",
      checkIn: "21/11/2023",
      checkOut: "26/11/2023",
    },
    location: {
      city: "Istanbul",
      country: "Turkey",
    },
  },
  {
    id: "s470",
    product: "Cozy Flat",
    customer: "Noa",
    price: 219.43,
    bookingStatus: {
      status: "completed",
      bookedAt: "19/12/2023",
      checkIn: "26/12/2023",
      checkOut: "28/12/2023",
    },
    location: {
      city: "Dubai",
      country: "UAE",
    },
  },
  {
    id: "s471",
    product: "City Room",
    customer: "Tom",
    price: 250.97,
    bookingStatus: {
      status: "completed",
      bookedAt: "11/04/2023",
      checkIn: "18/04/2023",
      checkOut: "22/04/2023",
    },
    location: {
      city: "Istanbul",
      country: "Turkey",
    },
  },
  {
    id: "s472",
    product: "Garden Suite",
    customer: "Rami",
    price: 185.1,
    bookingStatus: {
      status: "completed",
      bookedAt: "06/06/2023",
      checkIn: "13/06/2023",
      checkOut: "17/06/2023",
    },
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s473",
    product: "Garden Suite",
    customer: "Rami",
    price: 124.58,
    bookingStatus: {
      status: "completed",
      bookedAt: "23/02/2023",
      checkIn: "02/03/2023",
      checkOut: "06/03/2023",
    },
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s474",
    product: "Garden Suite",
    customer: "Alice",
    price: 141.54,
    bookingStatus: {
      status: "completed",
      bookedAt: "08/02/2023",
      checkIn: "15/02/2023",
      checkOut: "20/02/2023",
    },
    location: {
      city: "Barcelona",
      country: "Spain",
    },
  },
  {
    id: "s475",
    product: "Garden Suite",
    customer: "Rami",
    price: 291.4,
    bookingStatus: {
      status: "completed",
      bookedAt: "12/09/2023",
      checkIn: "19/09/2023",
      checkOut: "23/09/2023",
    },
    location: {
      city: "Berlin",
      country: "Germany",
    },
  },
  {
    id: "s476",
    product: "Garden Suite",
    customer: "John",
    price: 248.86,
    bookingStatus: {
      status: "completed",
      bookedAt: "19/02/2023",
      checkIn: "26/02/2023",
      checkOut: "03/03/2023",
    },
    location: {
      city: "Istanbul",
      country: "Turkey",
    },
  },
  {
    id: "s477",
    product: "City Room",
    customer: "Moshe",
    price: 128.28,
    bookingStatus: {
      status: "completed",
      bookedAt: "18/02/2023",
      checkIn: "25/02/2023",
      checkOut: "28/02/2023",
    },
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s478",
    product: "City Room",
    customer: "Lea",
    price: 229.33,
    bookingStatus: {
      status: "completed",
      bookedAt: "22/09/2023",
      checkIn: "29/09/2023",
      checkOut: "04/10/2023",
    },
    location: {
      city: "Dubai",
      country: "UAE",
    },
  },
  {
    id: "s479",
    product: "Garden Suite",
    customer: "Lior",
    price: 270.54,
    bookingStatus: {
      status: "completed",
      bookedAt: "01/07/2023",
      checkIn: "08/07/2023",
      checkOut: "11/07/2023",
    },
    location: {
      city: "Rome",
      country: "Italy",
    },
  },
  {
    id: "s480",
    product: "Urban Loft",
    customer: "Lea",
    price: 244.47,
    bookingStatus: {
      status: "completed",
      bookedAt: "15/07/2023",
      checkIn: "22/07/2023",
      checkOut: "26/07/2023",
    },
    location: {
      city: "Rome",
      country: "Italy",
    },
  },
  {
    id: "s481",
    product: "Urban Loft",
    customer: "Noa",
    price: 166.46,
    bookingStatus: {
      status: "completed",
      bookedAt: "14/06/2023",
      checkIn: "21/06/2023",
      checkOut: "26/06/2023",
    },
    location: {
      city: "Dubai",
      country: "UAE",
    },
  },
  {
    id: "s482",
    product: "Big Castel",
    customer: "Moshe",
    price: 222.85,
    bookingStatus: {
      status: "refunded",
      bookedAt: "02/09/2023",
      checkIn: "09/09/2023",
      checkOut: "11/09/2023",
    },
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s483",
    product: "Urban Loft",
    customer: "Tom",
    price: 108.8,
    bookingStatus: {
      status: "refunded",
      bookedAt: "04/02/2023",
      checkIn: "11/02/2023",
      checkOut: "16/02/2023",
    },
    location: {
      city: "Mexico City",
      country: "Mexico",
    },
  },
  {
    id: "s484",
    product: "City Room",
    customer: "Tom",
    price: 285.14,
    bookingStatus: {
      status: "refunded",
      bookedAt: "22/05/2023",
      checkIn: "29/05/2023",
      checkOut: "02/06/2023",
    },
    location: {
      city: "Rome",
      country: "Italy",
    },
  },
]

function query(filterBy) {
  return storageService.query("order")
}

async function remove(reject) {
  await storageService.remove("order", reject)
}

function getDashboardStats() {
  const totalRevenue = sales.reduce((sum, sale) => sum + sale.price, 0)
  const completedSales = sales.filter(
    (sale) => sale.bookingStatus?.status === "completed"
  )
  const refundedSales = sales.filter(
    (sale) => sale.bookingStatus?.status === "refunded"
  )
  const totalSales = completedSales.reduce((sum, sale) => sum + sale.price, 0)
  const avgRevenue = totalSales / completedSales.length || 0
  const customers = [...new Set(completedSales.map((sale) => sale.customer))]

  return Promise.resolve({
    totalSales: completedSales.length,
    totalRevenue: totalRevenue,
    totalCustomers: customers.length,
    refunded: refundedSales.length,
    avgRevenue: avgRevenue.toFixed(2),
    staysInList: sales.length,
  })
}

function getSalesByCountry() {
  const map = {}

  for (const sale of sales) {
    const country = sale.location?.country
    if (!country) continue
    if (!map[country]) map[country] = 0
    map[country]++
  }

  return Promise.resolve(
    Object.entries(map).map(([name, value]) => ({ name, value }))
  )
}
