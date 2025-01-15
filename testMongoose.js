const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024')
var schema = mongoose.Schema({ name: String })
const Serials = mongoose.model('Serial', schema)
schema.methods.ser = function () {
	console.log(this.name + ' is very interesting')
}
const serial = new Serials({ name: 'Squid Game' })
serial.save().then(() => console.log('Piu'))
