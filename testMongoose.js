const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024')
const Serial = require('./models/serial.js').Serial
var serial = new Serial({
	title: 'Good Omens',
	nick: 'goodomens',
})
serial.save()
