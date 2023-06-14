const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Types.ObjectId,
            default: new mongoose.Types.ObjectId()
        },
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