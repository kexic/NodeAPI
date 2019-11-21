// Customers Table

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


// Products Table

var products = [];

products.push({
	_id: 37,
	name: 'Basic Widget'
});

products.push({
	_id: 12,
	name: 'Advanced Widget'
});


// Orders Table

var orders = [];

orders.push({
	_id: 1234,
	customerOrders: 1,
	items: products,
	protectionPlan: true
});


// Customer-Order-Relationship Table

var customerOrders = [];

customerOrders.push({
	_id: 1111,
	customer_id: 1,
	order_id: 1234,
	status: 'processed'
});


// Create the catalogues

db.categories.insert( { _id: "Product", children: [] });
db.categories.insert( { _id: "Customer", parent: "CustomerOrders", children: [] } );
db.categories.insert( { _id: "Orders", parent: "CustomerOrders" } );

