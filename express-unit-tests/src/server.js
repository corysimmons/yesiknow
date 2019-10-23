const express = require('express')
const axios = require('axios')

const app = express()

app.get('/api/v1/users', (req, res) => {
  axios
    .get('http://localhost:3000/users')
    .then(users => {
      res.status(200).send(users.data)
    })
    .catch(err => {
      console.error(err)
      res.send(err)
    })
})

app.get('/api/v1/posts', (req, res) => {
  axios
    .get('http://localhost:3000/posts')
    .then(posts => {
      res.status(200).send(posts.data)
    })
    .catch(err => {
      console.error(err)
      res.send(err)
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('---server.js started---'))