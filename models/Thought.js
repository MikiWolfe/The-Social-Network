const mongoose = require('mongoose');

const reactionSchema =  new mongoose.Schema({

})

const thoughtSchema = new mongoose.Schema({
    reactions : [ reactionSchema ]
})

const Thought = mongoose.model('Thought' , thoughtSchema);

const handleError = (err) => console.error(err)

module.exports = Thought
