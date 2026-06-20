const express = require("express");
const authMiddle = require("./middleware/authMiddleware");
const bankAmount = require("./controller/bankAmountController");
const app = express();
const mongoose = require("mongoose");
const userDelete = require("./controller/userDelete");
const userUpdate = require("./controller/userUpdate");
const registration = require("./controller/regiController");

mongoose
  .connect(
    "mongodb+srv://jhulonkumar244:208jK244@cluster0.zsglfxk.mongodb.net/todo?appName=Cluster0",
  )
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

const port = 5000;

app.use(express.json());

app.get("/bank", authMiddle, bankAmount);

app.post("/registration", registration);
app.delete("/user/:id", userDelete);
app.post("/update/:id", userUpdate);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
