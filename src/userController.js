const userModal = require("./userModal");


const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.res;
        if (!name || !email || !password) {
            return res.status(400).send({
                message: "Please provide all detals (name, email, password)"
            })
        };

        const saveUser = await userModal.create(req.res);

        return res.status(201).send({
            message: "User registered successfully",
            data: saveUser
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const checkpassword = await userModal.findOne({ email: email });
        if (password !== checkpassword.password) {
            return res.status(400).send({
                message: "Incorrect password"
            });

        }
        let jwtSecretKey = "SecretKey";
        let data = {
            time: Date(),
            userId: checkpassword._id,
        }

        const token = jwt.sign(data, jwtSecretKey);

        res.send(token);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)
    }
}

module.exports = {registerUser, login};