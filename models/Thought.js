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
        reactions: [{ type: Schema.Types.ObjectId, ref: 'reaction' }],
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now(),
        }
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;