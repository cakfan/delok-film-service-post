const express = require('express')
const router = express.Router()
const { create, get, update, destroy } = require('./handler/cast')

/* GET users listing. */
router.get('/', get)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', destroy)

module.exports = router
