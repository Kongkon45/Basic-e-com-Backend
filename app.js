
const express = require("express");
require('./config/db');
const cors = require("cors");
const productRouter = require("./routes/productRoute")


const app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(productRouter)

// home route 
app.get("/", (req, res)=>{
    res.status(200).json({message : "Server is Ready"})
})

// not found page 
app.use((req, res, next)=>{
    res.status(404).json({message : "This url is not found"})
})

// server error 
app.use((err, req, res, next)=>{
    res.status(500).json({message : "Server something broke"})
})

module.exports = app;
