const User = require("../models/NurseryModel");
const bcrypt = require("bcrypt");

module.exports.nsignup = async (req, res, next) => {
    try {
        const { nurseryname, ownername, email, password, phone, address, state, city } = req.body;
        const emailCheck = await User.findOne({ email });
        if (emailCheck)
            return res.json({ msg: "Email already used", status: false });
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            nurseryname,
            ownername,
            password: hashedPassword,
            phone,
            address,
            state,
            city,
        });
        delete user.password;
        return res.json({ status: true, user });
    } catch (error) {
        next(error);
    }
};

module.exports.nlogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user)
            return res.json({ msg: "Incorrect email or password", status: false });
        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword)
            return res.json({ msg: "Incorrect email or password", status: false });
        delete user.password;
        return res.json({ status: true, user });
    } catch (error) {
        next(error);
    }
};
