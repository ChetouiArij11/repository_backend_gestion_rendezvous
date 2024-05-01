const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "API de gestion des patients",
      version: "1.0.0",
      description: "Documentation de l'API pour la gestion des patients dans le système médical.",
    },
  },
  apis: ["./Routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
