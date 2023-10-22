const { default: User } = require("../schema/userSchema")

exports.createUser = async (req, res) => {
    const reqBody = req.body;
    console.log(reqBody)

    try {
        const existingUser = await User.findOne({
            uid: reqBody.uid
        });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = User({
            uid: reqBody.uid,
            email: reqBody.email,
            name: reqBody.name,
            picture: reqBody.picture,
        })

        //save

        const user = await newUser.save();

        res.status(201).json(user)


    } catch (e) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });

    }
}