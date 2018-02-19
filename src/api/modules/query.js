import merge from 'lodash.merge'

export const controllers = {
  createOne(model, body) {
    return model.create(body)
  },

  updateOne(docToUpdate, update) {
    merge(docToUpdate, update)
    return docToUpdate.save()
  },

  deleteOne(docToUpdate) {
    return docToUpdate.remove()
  },

  getOne(docToGet) {
    return Promise.resolve(docToGet)
  },

  getAll(model) {
    return model.find({})
  },

  findByParam(model, id) {
    return model.findById(id)
  },
}

export const createOne = model => (req, res, next) => {
  return controllers
    .createOne(model, req.body)
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err))
}

export const updateOne = model => (req, res, next) => {
  return controllers
    .update(req.docFromId, req.body)
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err))
}

export const deleteOne = model => (req, res, next) => {
  return controllers
    .deleteOne(req.docFromId)
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err))
}

export const getOne = model => (req, res, next) => {
  return controllers
    .getOne(req.docFromId)
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err))
}

export const getAll = model => (req, res, next) => {
  return controllers
    .getAll(model)
    .then(docs => res.status(200).json(docs))
    .catch(err => next(err))
}

export const findByParam = model => (req, res, next, id) => {
  return controllers
    .findByParam(model, id)
    .then(doc => {
      if (!doc) {
        next(new Error('Not Found Error'))
      } else {
        req.docFromId = doc
        next()
      }
    })
    .catch(err => next(err))
}

export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    createOne: createOne(model),
    deleteOne: deleteOne(model),
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    updateOne: updateOne(model),
  }

  return { ...defaults, ...overrides }
}
