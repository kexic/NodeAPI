module.exports = (app) => {
    const orders = require('../controllers/order.controller.js');
    const rootPath = '/orders';

    // Create a new order
    app.post(rootPath, orders.create);

    // Retrieve all orders
    app.get(rootPath, orders.findAll);

    // Retrieve a single order with orderId
    app.get(rootPath + '/:orderId', orders.findOne);

    // Update a Note with orderId
    app.put(rootPath + '/:orderId', orders.update);

    // Delete a Note with orderId
    app.delete(rootPath + '/:orderId', orders.delete);
};