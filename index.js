const express = require('express');
const app = express();

app.listen(3000,()=>{console.log("listening on Port 3000")});
app.get('/',(req,res)=>{res.send("HELLO WORLD")});