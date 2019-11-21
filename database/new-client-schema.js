// Customer Table

var customers = [];

var customer = {
	_id: 1,
	name: 'Joe Smith',
	locale: 'USA',
	phones: [
		{
			type: 'cell',
			number: '405.867.5309'
		},
		{
			type: 'work',
			number: '123.123.1234'
		}
	],
	email: 'joe_s@gmail.com',
	address: {
		street: '123 Vic Way',
		city: 'Dallas',
		state: 'TX',
		zip: '75001'
	},
	customerOrders: [1111]
};

customers.push(customer);


// Product Table

var products = [];

products.push({
	_id: 37,
	name: 'Basic Widget'
});

products.push({
	_id: 12,
	name: 'Advanced Widget'
});


// Order Table

var orders = [];

orders.push({
	_id: 1234,
	customerOrders: 1,
	items: products,
	protectionPlan: true
});


// CustomersOrders Relationship Table (Many-to-Many)

var customersOrders = [];

customersOrders.push({
	_id: 1111,
	customer_id: 1,
	order_id: 1234,
	status: 'processed'
});



// Create the collections

var MongoClient = require('mongodb').MongoClient;
var config = require('../config');
var url = config.url;
var database = config.newdb;
var collections = {
	Customer: "Customer",
	Order: "Order",
	Product: "Product",
	CustomersOrders: "CustomersOrders"
};

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db(database);

	// Insert data manually (TODO:  Write script to accomplish this against a data set)

	// Customers
	customers.map(
		function(customer) {
			dbo.collection(collections.Customer).insertOne(customer, function(err, res) {
				if (err) throw err;
				console.log(collections.Customer + " record inserted");
			});
		}
	);

	// Products
	products.map(
		function(product) {
			dbo.collection(collections.Product).insertOne(product, function(err, res) {
				if (err) throw err;
				console.log(collections.Product + " record inserted");
			});
		}
	);

	// Orders
	orders.map(
		function(order) {
			dbo.collection(collections.Order).insertOne(order, function(err, res) {
				if (err) throw err;
				console.log(collections.Order + " record inserted");
			});
		}
	);

	// CustomersOrders
	customersOrders.map(
		function(customerOrder) {
			dbo.collection(collections.CustomersOrders).insertOne(customerOrder, function(err, res) {
				if (err) throw err;
				console.log(collections.CustomersOrders + " record inserted");
			});
		}
	);

	// Table Relationships
	dbo.collection(collections.Product).insert( { _id: "productId", name: collections.Product, children: [] });
	dbo.collection(collections.Customer).insert( { _id: "customerId", name: collections.Customer, parent: collections.CustomersOrders } );
	dbo.collection(collections.Order).insert( { _id: "orderId", name: collections.Order, parent: collections.CustomersOrders } );
	dbo.collection(collections.CustomersOrders).insert( {
		_id: "customersOrdersId",
		name: collections.CustomersOrders,
		children: [collections.Customer, collections.Order]
	} );

	// Close the database
	db.close();
});

