const User = require("../models/User");

module.exports = {
    getUser: async(req, res) => {
        try {
            const user = await User.findById(req.user.id)

            const { password, __v}
        } catch (error) {
            
        }
    }
}