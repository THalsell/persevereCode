const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://thalsellprsvr:Baylor%2313@learnmongodb.xlflnyo.mongodb.net/?retryWrites=true&w=majority&appName=LearnMongoDB", { useNewUrlParser: true , useUnifiedTopology: true });

const port = 3000;
app.listen(port, () => {console.log("Server running on port" + port);
});