const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedExercises` array in User.js
const exerciseSchema = new Schema({
    exerciseId: {
        type: String,
        required: true,
    },
    equipment: {

    },
    bodyPart: {
        type: String
    },
    gifUrl: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    target: {
        type: String
    }
});

module.exports = exerciseSchema;