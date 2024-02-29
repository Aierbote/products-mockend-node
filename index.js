const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/api/products", (request, response) => {
  async function fetchProducts() {
    try {
      const fetchedData = await fetch(
        "https://mockend.up.railway.app/api/products/"
      );
      const parsedData = await fetchedData.json();

      response.status(200).json(parsedData);
    } catch (error) {
      console.error("Error fetching products", error);

      response.status(500).json({ error: "Error fetching products" });
    }
  }

  fetchProducts();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});