require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const axios = require('axios')

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})
client.connect()

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  const { email, password } = req.body

  const salt = bcrypt.genSaltSync(10)
  const hashedPass = bcrypt.hashSync(password, salt)
  
  client.query('INSERT INTO users(email, hashed_pass) VALUES($1, $2)', [email, hashedPass], (err, pgRes) => {
    if (err) {
      console.error(err)
      res.sendStatus(500)
    } else {
      res.sendStatus(200)
    }
  })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body

  // Fetch user row from db
  client.query('SELECT * FROM users WHERE email = $1', [email], (err, pgRes) => {
    if (err) {
      console.error(err)
      res.sendStatus(500)
    } else {
      // Found that email. Now validate hashed pass from db with the plaintext pass from req
      const { hashed_pass, email } = pgRes.rows[0]
      const validPass = bcrypt.compareSync(password, hashed_pass)

      console.log(999, validPass)

      if (validPass) {
        res.status(200).send(
          jwt.sign(
            {
              user_email: email
            },
            process.env.ACCESS_SECRET,
            {
              expiresIn: '10s'
            }
          )
        )
      }
    }
  })
})

app.post('/validate-access-token', (req, res) => {
  const { accessToken } = req.body

  try {
    jwt.verify(accessToken, process.env.ACCESS_SECRET)
    res.sendStatus(200)
  } catch (err) {
    // jwt.verify() will throw an err. Just return false to keep client's axios from crying up a storm in console.
    return false
  }
})

app.post('/load-secret', (req, res) => {
  const { accessToken } = req.body

  console.log(1111)

  // Validate their token
  axios
    .post('/validate-access-token', {
      accessToken
    })
    .then(res => {
      // Fetch pokemon and send it to client
      axios
        .get('https://pokeapi.co/api/v2/pokemon/pikachu/')
        .then(res => {
          res.status(200).send(res)
        })
        .catch(err => {
          console.error(err)
          res.sendStatus(500) // Something weird happened, throw 500
        })
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(401) // They didn't validate, send unauthorized status code
    })
})

app.listen(5000, () => console.log('http://localhost:5000'))