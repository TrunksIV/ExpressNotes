const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");

var corOptions = {
  origin: "http://localhost:8081",
  origin: "http://localhost:3000",
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

// routers
const notesRouter = require("./routes/notesRouter");

app.use("/api/notes/", notesRouter);

//  server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
