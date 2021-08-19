const User = require("../models/User");
const Address = require("../models/Address");

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users)
    },

    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json(user)
    }
};