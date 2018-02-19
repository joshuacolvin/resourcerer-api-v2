import express from 'express'
import resourceController from './resource.controller'

export const resourceRouter = express.Router()

resourceRouter.param('id', resourceController.findByParam)

resourceRouter
  .route('/')
  .get(resourceController.getAll)
  .post(resourceController.createOne)

resourceRouter
  .route('/:id')
  .get(resourceController.getOne)
  .put(resourceController.updateOne)
  .delete(resourceController.deleteOne)
