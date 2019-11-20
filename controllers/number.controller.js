const Numbers = require('../models/number.model.js');

const insertNumber = num => {
    if(typeof(num) !== "Number") {
        return res.status(400).send({
            message: "Only numbers can exist in the list"
        });
    }

    // Create a Numbers
    const number = new Numbers(num);

    // Save Number in the database
    number.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while inserting the number " + num
            });
        });
};

//Create new Numbers
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Numbers content can not be empty"
        });
    }

    const numbers = req.body;
    
    if (!numbers.length === 500) {
        return res.status(400).send({
            message: "The list must be exactly 500 numbers"
        });
    }
    
    numbers.map(insertNumber);
};

const sortLowToHigh = ({number: a}, {number: b}) => (a > b) ? 1 : -1;

// Retrieve all numbers from the database.
exports.findAll = (req, res) => {
    Numbers.find()
    .then(numbers => {
        numbers.sort(sortLowToHigh);
        res.send(numbers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving numbers."
        });
    });
};

exports.patch = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Number cannot be empty"
        });
    }

    const {number} = req.body;
    let indexTarget;
    let lastItemId;

    const currentList = Numbers.find()
        .then(numbers => {
            numbers.map(num => {
                if (num.number === number) {
                    indexTarget = num;
                }
                lastItemId = num.id;
            })
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while retrieving numbers."
            });
        });

    if(indexTarget && lastItemId) {
        // Insert the patch item
        const insertNumber = new Numbers(number);
        insertNumber.save();

        // Remove the extra item on the list
        Numbers.findByIdAndDelete(lastItemId, err => {
            res.status(500).send({
                message: err.message || "Unable to remove the excess record after the patch"
            });
        });
    }
};