var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' })
})
router.get('/squid', function (req, res, next) {
	res.send('<h1>Игра в  кальмара</h1>')
})
router.get('/sherlock', function (req, res, next) {
	res.send('<h1>Шерлок</h1>')
})
/* Страница Компота */
router.get('/arcane', function (req, res, next) {
	res.send('<h1>Аркейн</h1>')
})

module.exports = router
