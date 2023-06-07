const mongoose = require('mongoose');

var scheme = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

// const Testdb = mongoose.model('Testdb', scheme);
// module.exports = Testdb;
module.exports =  mongoose.model('Testdb', scheme);




