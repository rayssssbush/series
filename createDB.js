const { MongoClient } = require('mongodb')
var data = require('./data.js').data

console.log(data) // Проверьте, что выводится в консоль

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'tc2024'

async function main() {
	await client.connect()
	console.log('Connected successfully to server')
	const db = client.db(dbName)
	const collection = db.collection('serials')

	// Проверьте, что data является массивом
	if (Array.isArray(data)) {
		const insertResult = await collection.insertMany(data)
		console.log('Inserted documents =>', insertResult)
	} else {
		console.log('Data is not an array')
	}

	return 'done.'
}

main()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close())
