const express = require('express')
const router = express.Router()

const universalLoader = require('../universal')

router.get('/', universalLoader)

exports = router
