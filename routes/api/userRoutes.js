const router = require('express').Router();
const User = require('../../models/User');

async function run() {
    const user = await User.create({ username: "Jenny", email: "Princess@gmail.com" })
    console.log(user)
}
run()


module.exports = router;