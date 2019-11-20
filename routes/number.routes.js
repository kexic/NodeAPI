module.exports = (app) => {
    const numbers = require('../controllers/number.controller.js');
    const rootPath = '/orders';
    const rootPathWithId = rootPath + '/:number';

    // Create a new number
    app.post(rootPath, numbers.create);

    // Retrieve all numbers
    app.get(rootPath, numbers.findAll);

    // Patch a number
    app['patch'](rootPathWithId, numbers.patch);
};