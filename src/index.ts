import express from "express";

const app = express();
const PORT = 8000;

app.get("/", async function (req, res) {
  res.send("Greeting from 5minslearn, I am changed right now");
});

app.listen(PORT, async function () {
  console.log(`App runnint on ${PORT}`);
});
