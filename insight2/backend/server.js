const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const cors = require('cors');
const PORT = 4000;

// app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

app.use("/homepage", require("./src/routes/homepage"));
app.use("/login", require("./src/routes/login"));
app.use("/failedToAuth", require("./src/routes/failed"));
