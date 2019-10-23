const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/', (req, res) => {
  axios
    .get('http://localhost:3000/users')
    .then(users => {
      res.status(200).send(users.data.map(user => {
        user.fetchedFromServer = true
        return user
      }))
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err)
    })
})

export default router