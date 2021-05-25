<<<<<<< HEAD


const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(cors());
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
=======


const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(cors());
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
>>>>>>> 19d5a9c8cb9dd9a56efc03dd007d59d8c00c494a
});