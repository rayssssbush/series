var express = require('express')
var router = express.Router()
var Serial = require('../models/serial').Serial // Импортируем модель Serial

router.get('/', function (req, res, next) {
	res.send('Новый маршрутизатор, для маршрутов, начинающихся с serials')
})

router.get('/:nick', async function (req, res, next) {
	var serials = await Serial.find({ nick: req.params.nick })
	console.log(serials)

	if (!serials.length) return next(new Error('Нет такого сериала на сайте'))
	var serial = serials[0]
	res.render('serial', {
		title: serial.title,
		picture: serial.avatar,
		desc: serial.desc,
	})
})

module.exports = router
