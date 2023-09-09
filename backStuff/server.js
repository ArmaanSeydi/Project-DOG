require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DOGDB = require("./model/model")
app.use(express.json());

mongoose.connect("mongodb+srv://tommy:1099@hacker-man.mqkqw8a.mongodb.net/DOG");
const db = mongoose.connection;
db.on("error", (err)=> console.log(err));
db.once("open", ()=> console.log("Connected to DB"));

app.get("/", async (req, res)=>{
    let fetchedDog;
    await fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(data => fetchedDog = data.message);
    res.body = fetchedDog;
    const dog_db_model = new DOGDB({
        "src": fetchedDog
    })
    try {
        const newDog = await dog_db_model.save()
        res.status(201).send(`<img src="${newDog.src}"></img>`);
    } catch (error) {
        console.log(error.mongoose);
    }
})
app.get("/all", async(req, res)=>{
    const allDogs = await DOGDB.find();
    allDogs.forEach(dog => {
        res.write(`<div style="block: inline-block; padding: 20px;"><img src="${dog.src}"></img></div>`);
    });
    res.end();
})

app.listen(4444);