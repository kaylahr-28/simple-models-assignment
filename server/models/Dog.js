const mongoose = require('mongoose');

let DogModel;

const DogSchema = new mongoose.Schema({
    //name, breed, age, createdDate
    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    breed: {
        type: String,
        required: true,

    },
    age: {
        type: Number,
        required: true,

    },
    createdDate: {
        type: Date,
        default: Date.now,
    }

});

DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;