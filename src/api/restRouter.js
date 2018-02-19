import express from 'express'
import { apiErrorHandler } from './modules/errorHandler'
import { collectionRouter } from './resources/collection'

export const restRouter = express.Router()

restRouter.use('/collection', collectionRouter)
restRouter.use(apiErrorHandler)
