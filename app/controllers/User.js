import { Router } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import UserModel from './../models/User'

const router = new Router()
const user = new UserModel()

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.post('/', function (request, response) {
  user.add(
    {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password
    },
    userData => response.status(200).send(userData),
    () => response.status(500).send('There was a problem adding the information to the database.')
  )

})

router.get('/', function (request, response) {
  user.getAll(
    users => response.status(200).send(users),
    () => response.status(500).send('There was a problem finding the users.')
  )
})

router.get('/:id', function (request, response) {
  const userId = new mongoose.Schema.ObjectId(request.params.id)

  user.get(
    userId,
    userData => {
      if (!user) {
        return response.status(404).send('No user found.')
      }

      response.status(200).send(userData)
    },
    () => response.status(500).send('There was a problem finding the user.')
  )
})

router.delete('/:id', function (request, response) {
  const userId = new mongoose.Schema.ObjectId(request.params.id)
  user.remove(
    userId,
    userData => response.status(200).send('User: ' + userData.name + ' was deleted.'),
    () => response.status(500).send('There was a problem deleting the user.')
  )
})

router.put('/:id', function (request, response) {
  const userId = new mongoose.Schema.ObjectId(request.params.id)

  user.update(
    userId,
    request.body,
    userData => response.status(200).send(userData),
    () => response.status(500).send('There was a problem updating the user.')
  )
})

export default router
