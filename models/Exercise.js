const {Schema, model} = require('mongoose');


const exerciseSchema = new Schema({
    day: {
        type: Date,
        default:  Date.now
    },
    exercises: {
        type: Array
    }
})
const Workout = model('Workout', exerciseSchema);

module.exports = Workout;