const mongoose = require('mongoose');

let DogModel;

const DogSchema = new mongoose.Schema({
    //name, breed, age, createdDate
    name: {
        type: String,
        trim: true,
        unique: true,
    },
    breed: {
        type: String,
    },
    age: {
        type: Number,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }

});

DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;