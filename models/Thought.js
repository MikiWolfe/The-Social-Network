const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reactionSchema =  new mongoose.Schema({
thoughts : [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }
]
})

const thoughtSchema = new mongoose.Schema({
    reactions : [ reactionSchema ]
})

const Thought = mongoose.model('Thought' , thoughtSchema);

const handleError = (err) => console.error(err)

module.exports = Thought
