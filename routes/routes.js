const modelfile = require("../model/model");
const express = require("express")
const app = express.Router();

app.post('/push',async(req,res)=>{
    const browserdata = req.body
    const pushingdata = await new modelfile(browserdata);
    pushingdata.save();
    res.json("data added successfully")
})

app.get('/get',async(req,res)=>{
    const dbdatas = await modelfile.find();
    // console.log(dbdatas);
    res.json(dbdatas)
})

app.delete('/delete/:id',async(req,res)=>{
    const ids = req.params.id
    await modelfile.findByIdAndDelete(ids);
    res.json("data deleted successfully...")
})

app.put('/update/:id',async(req,res)=>{
    const ids = req.params.id
    await modelfile.findByIdAndUpdate(ids,req.body,{new:true});
    res.json("data updated successfully...")
})

module.exports = app;