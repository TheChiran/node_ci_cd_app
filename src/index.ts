import express from "express";

const app = express();
const PORT = 8000;

app.get("/", async function (req, res) {
  res.send(
    `Greeting from Chiran, Tonmoy, Changed docker-compose image with dynamic env values. DateTime: ${new Date()} `
  );
});

app.listen(PORT, async function () {
  console.log(`App runnint on ${PORT}`);
});
