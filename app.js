const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger/swagger.yaml");

require("dotenv").config();
const connectDatabase = require("./config/db");
const Rendezvous = require("./models/Rendezvous");

// Database connection
connectDatabase([Rendezvous]);

// Create Express app
const app = express();

// Middleware to parse request bodies
app.use(bodyParser.json());

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware for handling rendezvous requests
const RendezvousRoutes = require("./Routes/rendezvousRoutes");
app.use("/rendezvous", RendezvousRoutes);

// Server port
const PORT = process.env.PORT || 3003;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
