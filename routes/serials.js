var express = require('express')
var router = express.Router()
var Serials = require('../models/serial').Serial
/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('Новый маршрутизатор, для маршрутов, начинающихся с serials')
})
router.get('/:nick', async function (req, res, next) {
	try {
		var serials = await Serial.find({ nick: req.params.nick })
		console.log(serials)

		if (!serials.length) {
			return next(new Error('Нет такого сериала на сайте'))
		}
		var serial = serials[0]
		res.render('serial', {
			title: serial.title,
			picture: serial.avatar,
			desc: serial.desc,
		})
	} catch (err) {
		console.error(err)
		next(err)
	}
})

module.exports = router
