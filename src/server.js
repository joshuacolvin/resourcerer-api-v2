import express from 'express'
import setupGlobalMiddleware from './middleware'
import { connect } from './db'
import { restRouter } from './api/restRouter'

const app = express()

setupGlobalMiddleware(app)
connect()

app.use('/api', restRouter)

app.all('*', (req, res) => {
  res.json({ ok: 200 })
})

export default app
