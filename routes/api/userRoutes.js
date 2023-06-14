const router = require('express').Router();
const User = require('../../models/User');
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');
// async function run() {
//     const user = await User.create({ username: "Jenny", email: "Princess@gmail.com" })
//     console.log(user)
// }
// run()




router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;