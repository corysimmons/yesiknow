const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/', (req, res) => {
  axios
    .get('http://localhost:3000/posts')
    .then(posts => {
      res.status(200).send(posts.data.map(post => {
        post.fetchedFromServer = true
        return post
      }))
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err)
    })
})

export default router