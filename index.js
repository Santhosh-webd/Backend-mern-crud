const express = require("express")
const app = express();
const cors = require("cors");

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use("",require("./routes/routes"))

app.get("/",(request,response)=>{
    response.send("Welcome")
})
app.listen(10000,()=>{
    console.log("port connected");
})