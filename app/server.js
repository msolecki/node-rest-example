import app from './'

const port = process.env.PORT || 5000

const server = app.listen(port, function () {
  console.log('Express server listening on port ' + port)
})
