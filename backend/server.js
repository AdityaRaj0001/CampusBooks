require("dotenv").config();

const express = require("express");
const bookRoutes = require("./routes/books");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//middleware

app.use(express.json()); //to get server req as json
app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/books", bookRoutes);

//connect to db then listen to requests

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection to database successful");
    //listen to request on PORT
    app.listen(process.env.PORT, () => {
      console.log(
        `listening to requests on port http://localhost:${process.env.PORT} `
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
