
const express = require('express');
const app = express()


// Your code goes here
const subscriber = require("./models/subscribers");

app.get("/subscribers",(req,res)=>{
    subscriber.find().then((ans)=>{
        res.send(ans);
    });
})


app.get("/subscribers/names",(req,res)=>{
    subscriber.find().select({"name":1,"subscribedChannel":1, "_id":0}).then(ans=>{
        res.send(ans);
    })
})

app.get("/subscribers/:id",(req,res)=>{
    subscriber.findById(req.params.id,function(err,adv){
        console.log(adv);
    })
    res.send(ans);
})







module.exports = app;
