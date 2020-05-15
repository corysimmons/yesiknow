import * as express from 'express'

import data from '../data'

const router = express.Router()

// List all
router.get('/', (req: express.Request, res: express.Response) => {
  const allProducts = data.products
  res.send(allProducts)
})

// Get 1
router.get('/:id', (req: express.Request, res: express.Response) => {
  const { id } = req.params
  const singleProduct = data.products.find(x => x.id === id)
  res.send(singleProduct)
})

export default router
