import ModelBase from './ModelBase'
import mongoose from 'mongoose'

export class UserModel extends ModelBase {
  constructor () {
    super()

    this.setSchema({
      _id: mongoose.SchemaTypes.ObjectId,
      name: String,
      email: String
    })
    this.setModel('User')
  }
}

export default UserModel
