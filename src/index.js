const express = require("express");

const app = express()
const PORT = 3000;

app.get("/", (req, res)=>{
    console.log("Default route")

    res.status(200).send("Default route")
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})