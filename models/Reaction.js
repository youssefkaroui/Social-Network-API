// requires moment 
const moment = require('moment');
// requires Mongoose
const { Schema, Types } = require('mongoose');

//  Defines the reactionSchema 
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );
  
  module.exports = reactionSchema;