const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
   make: { type: String, required: true },
   model: { type: String, required: true },
   year: { type: Number, required: true },
   price: { type: Number, default: 0 },
   photo: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtc3-y63KN_r5LwOC9PNqpwc5C1JPeN36_ug&s" },
    rating: Number,
    mileage: { type: Number, required: true },
    oneOwner: Boolean,
    status: { type: String, enum: ["SOLD", "AVAILABLE", "PENDING"] }
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;