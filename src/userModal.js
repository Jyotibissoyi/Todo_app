const { default: mongoose } = require("mongoose");

const user =new mongoose.Schema({
name : {
    type : String,
    require : true
},
email : {
    type : String,
    require : true
},
password : {
    type : Date,
}
},{timestamps: true});

module.exports = mongoose.model('user', user);