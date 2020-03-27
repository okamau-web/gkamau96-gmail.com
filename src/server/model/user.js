const mongoose = require('mongoose');

const User = mongoose.Schema({

    firstName: { type: String, trim: true, default: '' },
    otherNames: { type: String, trim: true, default: '' },
    role: { type: String, trim: true, default: '' },
    username: { type: String, trim: true, default: '' },
    email: { type: String, trim: true, default: '' },
    phone: { type: Number, trim: true, default: '0' },
    password: { type: String, trim: true, default: '' }


});
module.exports = mongoose.model('User', User);
