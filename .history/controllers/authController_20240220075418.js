const User = require("../models/User");
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const generateOtp = require("../utils/otp_generator");


module.exports = {
    createUser: async (req, res) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(!emailRegex.test(req.body.email)){
            return res.status(400).json({status: false, message: "Invalid email"});
        }

        const minPasswordLength = 8;

        if(req.body.password < minPasswordLength){
            return res.status(400).json({status: false, message: "Password should be at least " + minPasswordLength + "characters long"});
        }

        try {
            const emailExists = await User.findOne({email: req.body.email});

            if(emailExists){
                return res.status(400).json({status: false, message: "Email already exists"});
            }

            // GENERATE OTP
            const otp = generateOtp();

            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                userType: "Client",
                password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString(),
                otp: otp
            })

            // SAVE USER
            await newUser.save();

            // 

        } catch (error) {
            
        }
    },
    loginUser: async (req, res) => {},
}