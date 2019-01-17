import express from 'express'
import UserController from './controllers/User'

const app = new express()
app.use('/users', UserController)

export default app
