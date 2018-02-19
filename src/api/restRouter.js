import express from 'express'
import { apiErrorHandler } from './modules/errorHandler'
import { collectionRouter } from './resources/collection'
import { resourceRouter } from './resources/resource'

export const restRouter = express.Router()

restRouter.use('/collection', collectionRouter)
restRouter.use('/resource', resourceRouter)
restRouter.use(apiErrorHandler)
