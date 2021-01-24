
const express = require('express');
const app = express()


// Your code goes here
const subscriber = require("./models/subscribers");

app.get("/subscribers",(req,res)=>{
    subscriber.find().then((ans)=>{
        res.send(ans);
    });
})


app.get("/subscribers/name",(req,res)=>{
    subscriber.find().select({"name":1,"subscribedChannel":1, "_id":0}).then(ans=>{
        res.send(ans);
    })
})

app.get("/subscribers/:id",(req,res)=>{
    subscriber.find({id:req.params.id}).then(ans=>{
        if(!ans){
            res.sendStatus(400).send("message: error.message");
        }
        res.send(ans);
    })

})







module.exports = app;
