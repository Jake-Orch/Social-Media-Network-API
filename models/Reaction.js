const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now(),
        }
    }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;