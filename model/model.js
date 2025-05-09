const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://santhosh:santhosh@cluster0.xyeb1.mongodb.net/bookreviewmerncrud",{}).then(()=>{
    console.log("db connected");
})

const fieldexports = new mongoose.Schema({
    booktitle: {type:String},
    author: {type:String},
    rating: {type:Number},
    review: {type:String}
})

const mongodbfileexport = mongoose.model("Userdetails",fieldexports);

module.exports = mongodbfileexport;