const express = require("express");
const app = express(); // make an express app
const cors = require("cors")

app.use(cors());
app.use(express.static("public"));

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
