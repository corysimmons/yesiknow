import * as faker from 'faker'
import { v4 as uuidv4 } from 'uuid'

import { Product } from './models/Product'

interface DataCollection {
  products: Product[]
}

const products = [
  {
    id: uuidv4(),
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    image: 'https://source.unsplash.com/800x450/?fashion,clothing,shopping,gift',
    cents: faker.random.number(20000),
    quantity: faker.random.number(15)
  },
  {
    id: uuidv4(),
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    image: 'https://source.unsplash.com/800x450/?fashion,clothing,shopping,gift',
    cents: faker.random.number(20000),
    quantity: faker.random.number(15)
  },
  {
    id: uuidv4(),
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    image: 'https://source.unsplash.com/800x450/?fashion,clothing,shopping,gift',
    cents: faker.random.number(20000),
    quantity: faker.random.number(15)
  },
]

const data: DataCollection = {
  products
}

export default data