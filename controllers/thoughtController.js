const { User, Thought, Reaction } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
            console.log('Thought Retrieved');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.thoughtId })
                .select('__v');
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' });
            }
            res.status(200).json(thought)
            console.log('Thought Retrieved');
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought.id } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }
            res.status(200).json(thought);
            console.log('Thought Created');
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.body.thoughtId }, req.body, { new: true });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' });
            }
            res.status(200).json(thought);
            console.log('Thought Updated');
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.body.thoughtId }, { new: true });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID'});
            }
            res.status(500).json(thought);
            console.log('Thought Deleted');
        } catch (err) {
            res.status(500).json(err);
        }
    }
    // Add Reaction Methods
}