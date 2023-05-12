const express = require('express')
const router = express.Router()
const { create, get, update, destroy } = require('./handler/movie')

/* GET users listing. */
router.get('/', get)

router.post('/', create)

router.put('/:slug', update)

router.delete('/:slug', destroy)

module.exports = router
