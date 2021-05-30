const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = Schema({
    questions: {
        type: Array,
        required: true
    },
    subject: {
      type: String
    }
});

const Tests = mongoose.model('Tests', questionSchema);

module.exports = Tests;