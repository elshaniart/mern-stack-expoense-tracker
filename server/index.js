const express = require("express");
const cors = require("cors");
const app = express();

const expenses = require("./routes/expenses");

const connectDB = require("./db/connect.js");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/v1/expenses", expenses);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening in port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
