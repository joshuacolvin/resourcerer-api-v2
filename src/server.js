import express from 'express'

const app = express()

app.all('*', (req, res) => {
  res.json({ ok: 200 })
})

export default app
