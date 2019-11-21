var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("testdb");
	var record = {
		'Record ID': 1234,
		'Name': "Joe Smith",
		'Cell Phone': "405.867.5309",
		'Work Phone': "123.123.1234",
		'Email': "joe_s@gmail.com",
		'Address': "123 Vic Way, Dallas TX 75001",
		'Basic Widget Order': 37,
		'Advanced Widget Order': 12,
		'Protection Plan': true
	};
	dbo.collection("order").insertOne(record, function(err, res) {
		if (err) throw err;
		console.log("client record inserted");
		db.close();
	});
});