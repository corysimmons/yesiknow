import * as express from 'express'

import productRoutes from './controllers/product'

const app = express()

app.use('/products', productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))