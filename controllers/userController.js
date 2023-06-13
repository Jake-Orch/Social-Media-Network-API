const { User, Thought, Reaction } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
            console.log('User Retrieved');
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .populate({ path: 'thoughts', select: '-__v' });
            // Thought may have to be plural
            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }
            res.status(200).json(user);
            console.log('User Retrieved');
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(200).json(user);
            console.log('User Created');
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.userId }, res.body, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }
            res.status(200).json(user);
            console.log('User Updated');
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.userId });
            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }
            res.status(200).json(user);
            console.log('User Deleted');
        } catch (err) {
            res.status(500).json(err);
        }
    }
    //Add Friend Methods
}