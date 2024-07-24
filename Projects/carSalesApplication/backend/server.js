const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Car = require("./model/carModel");


const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://thalsellprsvr:Baylor%2313@learnmongodb.xlflnyo.mongodb.net/?retryWrites=true&w=majority&appName=LearnMongoDB", { useNewUrlParser: true , useUnifiedTopology: true });

app.post("/car", async (req, res) => {
    try {
        const car = new Car(req.body)
        await car.save()
        res.status(201).send(car)
    } catch (e) {
        res.status(400).send(e)
    }
});

app.get("/car", async (req, res) => {
    try {
        const car = await Car.find();
        res.status(200).send(car);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get("/car/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const car = await Car.findById({_id: id})
    res.status(200).send(car);
  } catch (e) {
    res.status(500).send(error);
  }
});

app.delete("/car/:id", async (req, res) => {
    const carId = req.params.id;
    try {
     await Car.deleteOne({_id: carId});
     res.status(200).send({message: "Car has been deleted!"})
    }catch (error) {
      res.status(500).send(error);
    }
  });

const port = 3000;
app.listen(port, () => {console.log("Server running on port" + port);
});