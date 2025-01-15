var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Serials',
		carouselImages: [
			{
				src: 'images/squid.jpeg',
				label: 'Squid Games',
				desc: 'Южнокорейский сериал о смертельной игре на выживание.',
			},
			{
				src: 'images/sherlock.jpeg',
				label: 'Sherlock',
				desc: 'Современная интерпретация приключений Шерлока Холмса.',
			},
			{
				src: 'images/arcane.jpg',
				label: 'Arcane',
				desc: 'Анимационный сериал, основанный на игре League of Legends.',
			},
		],
	})
})
router.get('/squid', function (req, res, next) {
	res.render('serial', {
		title: 'Squid Games',
		picture: 'images/squid.jpeg',
		desc: 'Южнокорейский сериал о смертельной игре на выживание, где участники борются за огромный денежный приз.',
	})
})

router.get('/sherlock', function (req, res, next) {
	res.render('serial', {
		title: 'Sherlock',
		picture: 'images/sherlock.jpeg',
		desc: 'Современная интерпретация приключений Шерлока Холмса и доктора Ватсона в Лондоне 21 века.',
	})
})

router.get('/arcane', function (req, res, next) {
	res.render('serial', {
		title: 'Arcane',
		picture: 'images/arcane.jpg',
		desc: 'Анимационный сериал, основанный на игре League of Legends, рассказывает историю города Пилтовера и его жителей.',
	})
})

router.get('/loki', function (req, res, next) {
	res.render('serial', {
		title: 'Loki',
		picture: 'images/loki.jpeg',
		desc: 'Сериал о боге обмана Локи, который оказывается вовлечён в многомировой кризис после событий фильма "Мстители: Финал".',
	})
})

router.get('/supernatural', function (req, res, next) {
	res.render('serial', {
		title: 'Supernatural',
		picture: 'images/supernatural.jpeg',
		desc: 'История двух братьев, Сэма и Дина Винчестеров, которые охотятся на демонов, духов и других сверхъестественных существ.',
	})
})

module.exports = router
