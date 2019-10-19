import express from 'express'

const app: express.Application = express()

const add = (a: number, b: number): number => a + b

app.get('/:a/:b', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { a, b } = req.params
  res.send(`Sum: ${add(Number(a), Number(b))}`)
})

app.listen(5000, () => console.log(`http://localhost:5000`))