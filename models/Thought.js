const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thoughtSchema = new mongoose.Schema({
  thoughts: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  
}
);

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: Schema.Type.ObjectsId,
      default: new Type(),
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true,
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

const Thought = mongoose.model("Thought", thoughtSchema);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
module.exports = Thought;
