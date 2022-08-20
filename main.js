const customerR = require("./customer");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express(); //THIS is an instance of Express Application (Web Server)
app.use(cors());
app.use(bodyparser.json());

// app.use(customerR.router);
app.use("/customer", customerR);

app.listen(3000); //LISTEN to port 3000
