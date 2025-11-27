const { Jwt } = require("jsonwebtoken")

const auth = async (req, res, next) =>{
try {

        const token = req.header(tokenHeaderKey);
        const verified =await Jwt.verify(token, "jwtSecretKey");
        if (verified) {
            console.log("Successfully Verified");
            next()
        } else {
            // Access Denied
            return res.status(401).send(error);
        } 
    } catch (error) {
        console.log(error);
        return res.status(500).send(error)  
    }
}
    
module.exports={auth}