const router = require('express').Router()
const places = require('../models/places.js')

router.get('/edit', (req, res) => {
    res.render('places/edit')
})

router.get('/newPage', (req, res) => {
    res.render('places/newPage')
})

router.get('/show', (req, res) => {
    res.render('places/show')
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.status(303).redirect('/places')
})
  
router.get('/', (req, res) => {


    res.render('places/index', {places})
})

module.exports = router
