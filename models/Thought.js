const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        // reactions: [reactionSchema],
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now(),
        }
                // use toLocaleTimeString() getter medthod to format timestamp
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;