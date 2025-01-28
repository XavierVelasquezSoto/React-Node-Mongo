const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movies.routes");
const productsRoutes = require("./routes/products.routes");
require("dotenv").config();

const corsOptions = {
  origin: "*", // Orígenes permitidos
  methods: ["GET", "POST", "PATCH", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Headers permitidos
  credentials: true, // Habilitar cookies/credenciales
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/movies", movieRoutes);
app.use("/api/products", productsRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port" ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

//npm install mongoose
