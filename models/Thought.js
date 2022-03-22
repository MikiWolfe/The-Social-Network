const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false
  },

);

const thoughtSchema = new mongoose.Schema({
  thoughtBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    
  },
  reactions: [ reactionSchema ]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  
}
);
const Thought = mongoose.model("Thought", thoughtSchema);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
module.exports = Thought;
