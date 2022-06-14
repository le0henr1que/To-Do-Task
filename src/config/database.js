const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1/todo';
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;