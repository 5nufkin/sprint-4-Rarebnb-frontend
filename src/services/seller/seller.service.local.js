import { storageService } from "../async-storage.service"
// import { userService } from '../user'

export const sellerService = {
  getDashboardStats,
  getSalesByCountry,
  query,
  remove,
}

const sales = [
  {
    id: "s300",
    product: "Garden Suite",
    customer: "Alice",
    price: 133.02,
    date: "2022-11-29",
    status: "completed",
    location: {
      city: "S\u00e3o Paulo",
      country: "Brazil",
    },
  },
  {
    id: "s301",
    product: "Urban Loft",
    customer: "Tom",
    price: 203.09,
    date: "2024-12-22",
    status: "completed",
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
    date: "2024-02-01",
    status: "refunded",
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
    date: "2022-04-19",
    status: "completed",
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
    date: "2023-12-05",
    status: "refunded",
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s305",
    product: "Urban Loft",
    customer: "Moshe",
    price: 180.95,
    date: "2023-09-28",
    status: "refunded",
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s306",
    product: "City Room",
    customer: "Alice",
    price: 284.98,
    date: "2022-01-25",
    status: "completed",
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s307",
    product: "Sea View Apartment",
    customer: "Alice",
    price: 250.39,
    date: "2023-09-08",
    status: "completed",
    location: {
      city: "Mexico City",
      country: "Mexico",
    },
  },
  {
    id: "s308",
    product: "Garden Suite",
    customer: "Lior",
    price: 81.94,
    date: "2022-03-31",
    status: "refunded",
    location: {
      city: "Rome",
      country: "Italy",
    },
  },
  {
    id: "s309",
    product: "Urban Loft",
    customer: "Rami",
    price: 119.22,
    date: "2021-05-15",
    status: "refunded",
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s310",
    product: "Garden Suite",
    customer: "Lea",
    price: 187.29,
    date: "2022-02-06",
    status: "completed",
    location: {
      city: "Istanbul",
      country: "Turkey",
    },
  },
  {
    id: "s311",
    product: "Garden Suite",
    customer: "Bob",
    price: 290.42,
    date: "2021-05-15",
    status: "completed",
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s312",
    product: "Urban Loft",
    customer: "John",
    price: 244.81,
    date: "2022-05-07",
    status: "completed",
    location: {
      city: "Barcelona",
      country: "Spain",
    },
  },
  {
    id: "s313",
    product: "Urban Loft",
    customer: "Alice",
    price: 131.87,
    date: "2022-08-14",
    status: "completed",
    location: {
      city: "Mumbai",
      country: "India",
    },
  },
  {
    id: "s314",
    product: "Urban Loft",
    customer: "Rami",
    price: 283.64,
    date: "2025-01-21",
    status: "completed",
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s315",
    product: "Sea View Apartment",
    customer: "Noa",
    price: 223.23,
    date: "2023-07-01",
    status: "refunded",
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s316",
    product: "City Room",
    customer: "Noa",
    price: 164.47,
    date: "2024-12-10",
    status: "completed",
    location: {
      city: "Mexico City",
      country: "Mexico",
    },
  },
  {
    id: "s317",
    product: "Cozy Flat",
    customer: "Lea",
    price: 117.4,
    date: "2022-01-31",
    status: "completed",
    location: {
      city: "Rome",
      country: "Italy",
    },
  },
  {
    id: "s318",
    product: "Sea View Apartment",
    customer: "Lea",
    price: 194.97,
    date: "2022-02-12",
    status: "completed",
    location: {
      city: "Buenos Aires",
      country: "Argentina",
    },
  },
  {
    id: "s319",
    product: "Sea View Apartment",
    customer: "Noa",
    price: 299.29,
    date: "2023-09-29",
    status: "refunded",
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s320",
    product: "Big Castel",
    customer: "Lea",
    price: 156.67,
    date: "2023-06-24",
    status: "completed",
    location: {
      city: "Sydney",
      country: "Australia",
    },
  },
  {
    id: "s321",
    product: "Urban Loft",
    customer: "John",
    price: 125.64,
    date: "2024-06-18",
    status: "completed",
    location: {
      city: "Istanbul",
      country: "Turkey",
    },
  },
  {
    id: "s322",
    product: "Urban Loft",
    customer: "Alice",
    price: 89.66,
    date: "2024-01-26",
    status: "completed",
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s323",
    product: "Cozy Flat",
    customer: "Rami",
    price: 290.84,
    date: "2024-10-20",
    status: "completed",
    location: {
      city: "Cairo",
      country: "Egypt",
    },
  },
  {
    id: "s324",
    product: "City Room",
    customer: "Noa",
    price: 259.38,
    date: "2022-12-13",
    status: "completed",
    location: {
      city: "Rome",
      country: "Italy",
    },
  },
  {
    id: "s325",
    product: "City Room",
    customer: "Dana",
    price: 116.33,
    date: "2023-12-17",
    status: "completed",
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s326",
    product: "Cozy Flat",
    customer: "Moshe",
    price: 298.14,
    date: "2021-10-23",
    status: "completed",
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s327",
    product: "Urban Loft",
    customer: "Alice",
    price: 190.87,
    date: "2024-04-09",
    status: "refunded",
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s328",
    product: "Sea View Apartment",
    customer: "Alice",
    price: 231.9,
    date: "2024-03-11",
    status: "completed",
    location: {
      city: "Dubai",
      country: "UAE",
    },
  },
  {
    id: "s329",
    product: "Big Castel",
    customer: "John",
    price: 299.3,
    date: "2023-07-20",
    status: "completed",
    location: {
      city: "Paris",
      country: "France",
    },
  },
  {
    id: "s330",
    product: "Sea View Apartment",
    customer: "Bob",
    price: 292.57,
    date: "2022-09-13",
    status: "completed",
    location: {
      city: "Sydney",
      country: "Australia",
    },
  },
  {
    id: "s331",
    product: "Big Castel",
    customer: "Rami",
    price: 293.91,
    date: "2021-02-01",
    status: "completed",
    location: {
      city: "Seoul",
      country: "South Korea",
    },
  },
  {
    id: "s332",
    product: "Sea View Apartment",
    customer: "Tom",
    price: 198.08,
    date: "2023-12-08",
    status: "refunded",
    location: {
      city: "Berlin",
      country: "Germany",
    },
  },
  {
    id: "s333",
    product: "City Room",
    customer: "Rami",
    price: 196.01,
    date: "2023-03-27",
    status: "completed",
    location: {
      city: "Seoul",
      country: "South Korea",
    },
  },
  {
    id: "s334",
    product: "City Room",
    customer: "Noa",
    price: 277.3,
    date: "2021-12-08",
    status: "completed",
    location: {
      city: "Mumbai",
      country: "India",
    },
  },
  {
    id: "s335",
    product: "Big Castel",
    customer: "Bob",
    price: 94.56,
    date: "2022-12-13",
    status: "completed",
    location: {
      city: "Barcelona",
      country: "Spain",
    },
  },
  {
    id: "s336",
    product: "Urban Loft",
    customer: "Noa",
    price: 125.92,
    date: "2023-06-28",
    status: "completed",
    location: {
      city: "Seoul",
      country: "South Korea",
    },
  },
  {
    id: "s337",
    product: "Sea View Apartment",
    customer: "Dana",
    price: 287.33,
    date: "2024-06-22",
    status: "completed",
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s338",
    product: "Cozy Flat",
    customer: "Moshe",
    price: 116.62,
    date: "2023-11-04",
    status: "completed",
    location: {
      city: "Dubai",
      country: "UAE",
    },
  },
  {
    id: "s339",
    product: "Urban Loft",
    customer: "Moshe",
    price: 110.97,
    date: "2022-09-28",
    status: "completed",
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s340",
    product: "Urban Loft",
    customer: "Lea",
    price: 192.07,
    date: "2023-10-28",
    status: "completed",
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s341",
    product: "Sea View Apartment",
    customer: "Moshe",
    price: 99.99,
    date: "2022-09-18",
    status: "completed",
    location: {
      city: "Toronto",
      country: "Canada",
    },
  },
  {
    id: "s342",
    product: "Garden Suite",
    customer: "Rami",
    price: 208.57,
    date: "2023-09-30",
    status: "refunded",
    location: {
      city: "Istanbul",
      country: "Turkey",
    },
  },
  {
    id: "s343",
    product: "Urban Loft",
    customer: "Lea",
    price: 93.31,
    date: "2023-08-21",
    status: "completed",
    location: {
      city: "Berlin",
      country: "Germany",
    },
  },
  {
    id: "s344",
    product: "Big Castel",
    customer: "Tom",
    price: 142.47,
    date: "2021-08-27",
    status: "completed",
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s345",
    product: "City Room",
    customer: "John",
    price: 186.68,
    date: "2023-11-02",
    status: "completed",
    location: {
      city: "Lagos",
      country: "Nigeria",
    },
  },
  {
    id: "s346",
    product: "Garden Suite",
    customer: "Moshe",
    price: 124.19,
    date: "2023-10-30",
    status: "completed",
    location: {
      city: "Cairo",
      country: "Egypt",
    },
  },
  {
    id: "s347",
    product: "Sea View Apartment",
    customer: "Alice",
    price: 255.6,
    date: "2022-08-04",
    status: "completed",
    location: {
      city: "S\u00e3o Paulo",
      country: "Brazil",
    },
  },
  {
    id: "s348",
    product: "Cozy Flat",
    customer: "Dana",
    price: 169.26,
    date: "2023-03-09",
    status: "completed",
    location: {
      city: "Cape Town",
      country: "South Africa",
    },
  },
  {
    id: "s349",
    product: "Garden Suite",
    customer: "Tom",
    price: 278.58,
    date: "2023-06-26",
    status: "completed",
    location: {
      city: "Bangkok",
      country: "Thailand",
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
  const completedSales = sales.filter((sale) => sale.status === "completed")
  const refundedSales = sales.filter((sale) => sale.status === "refunded")
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
