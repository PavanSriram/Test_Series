const express = require("express");
const cors = require("cors");     // It allows you to make requests from one website to another website in the browser
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); // To avoid warnings
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/questions");
app.use("/questions", exercisesRouter);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
