const router = require('express').Router()

router.get('/edit', (req, res) => {
    res.render('places/edit')
})

router.get('/newPage', (req, res) => {
    res.render('places/newPage')
})

router.get('/show', (req, res) => {
    res.render('places/show')
})

router.get('/:id', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]

    res.render('places/index', {places})
})

module.exports = router
