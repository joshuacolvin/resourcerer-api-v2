import dotenv from 'dotenv'
import merge from 'lodash.merge'

dotenv.config()

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const env = process.env.NODE_ENV

const baseConfig = {
  port: process.env.PORT,
  secrets: {},
  db: {
    url: process.env.DB_URL,
  },
}

let envConfig = {}

switch (env) {
  case 'development':
  case 'dev':
    envConfig = require('./dev').config
    break
  case 'test':
  case 'testing':
    envConfig = require('./testing').config
    break
  case 'prod':
  case 'production':
    envConfig = require('./prod').config
  default:
    envConfig = require('./dev').config
}

export default merge(baseConfig, envConfig)
