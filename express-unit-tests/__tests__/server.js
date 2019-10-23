const axios = require('axios')

describe('/api/v1/posts', () => {
  it('GET', () => {
    axios
      .get('http://localhost:5000/api/v1/posts')
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.data.length).toEqual(4)
        expect(res.data[0]).toHaveProperty('title')
        expect(res.data[0]).toHaveProperty('content')
      })
      .catch(err => console.error(err))
  })
})

describe('/api/v1/users', () => {
  it('GET', () => {
    axios
      .get('http://localhost:5000/api/v1/users')
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.data.length).toEqual(2)
        expect(res.data[0]).toHaveProperty('id')
        expect(res.data[0]).toHaveProperty('age')
        expect(res.data[0]).toHaveProperty('name')
        expect(res.data[0]).toHaveProperty('email')
      })
      .catch(err => console.error(err))
  })
})