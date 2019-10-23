import userRoutes from './api/v1/users'
import postRoutes from './api/v1/posts'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app
  .use(bodyParser.json())
  .use(cors())
  .use('/api/v1/users', userRoutes)
  .use('/api/v1/posts', postRoutes)
  .listen(PORT, () => console.log(`http://localhost:${PORT}`))