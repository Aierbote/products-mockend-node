const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});