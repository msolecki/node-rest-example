import mongoose from 'mongoose'

const defaultCallback = (error, item, successCallback, errorCallback) => {
  if (error) {
    console.error(error.message)
    return errorCallback()
  }

  successCallback(item)
}

export default class ModelBase {
  setSchema (schema) {
    this._schema = new mongoose.Schema(schema)
  }

  setModel (model) {
    this._model = mongoose.model(model, this._schema)
  }

  add (data, successCallback, errorCallback) {
    return this._model.create(
      data,
      (error, item) => defaultCallback(error, item, successCallback, errorCallback)
    )
  }

  getAll (successCallback, errorCallback) {
    return this._model.find(
      {},
      (error, items) => defaultCallback(error, items, successCallback, errorCallback)
    )
  }

  get (userId, successCallback, errorCallback) {
    return this._model.findById(
      userId,
      (error, item) => defaultCallback(error, item, successCallback, errorCallback)
    )
  }

  remove (userId, successCallback, errorCallback) {
    return this._model.findByIdAndRemove(
      userId,
      (error, item) => defaultCallback(error, item, successCallback, errorCallback)
    )
  }

  update (userId, data, successCallback, errorCallback) {
    return this._model.findByIdAndUpdate(
      userId,
      data,
      { new: true },
      (error, item) => defaultCallback(error, item, successCallback, errorCallback)
    )
  }
}
