const express = require('express')
const router = express.Router()

const usercontroller = require('../controller/spp')

router.get('/spps', usercontroller.index)

router.get('/spp/:id', usercontroller.show)

router.post('/spp', usercontroller.store)

router.put('/spp/:id', usercontroller.update)

router.delete('/spp/:id', usercontroller.delete)

module.exports = router
