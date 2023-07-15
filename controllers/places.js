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

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })  

router.get('/:id', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg'
      }]

    res.render('places/index', {places})
})

module.exports = router
