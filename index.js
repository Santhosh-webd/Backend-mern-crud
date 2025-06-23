const express = require("express")
const app = express();
const cors = require("cors");

app.use(express.json())
app.use(cors({
  origin: ['https://littlereviewmain.netlify.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.urlencoded({extended:true}));
app.use("",require("./routes/routes"))

app.get("/",(request,response)=>{
    response.send("Welcome")
})
app.listen(10000,()=>{
    console.log("port connected");
})
