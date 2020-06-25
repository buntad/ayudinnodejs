var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('oli homepage')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('about oli')
})
router.get('/:type/:value', function (req, res) {
  res.send( req.params.type + ' mas ' + req.params.value)
})

router.post('/', function (req, res) {
  res.send('Got a POST request')
})

router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

module.exports = router