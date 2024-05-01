const { createConnection } = require("typeorm");
require("dotenv").config();

async function connectDatabase() {
  try {
    await createConnection({
      type: "mysql",
      host: process.env.MYSQL_HOST || "db",
      port: parseInt(process.env.MYSQL_PORT) || 3306, // Convertir en entier
      username: process.env.MYSQL_USER || "root",
      password: process.env.MYSQL_PASSWORD || "root",
      database: process.env.MYSQL_DATABASE || "medirendez",
      entities: [__dirname + "/models/*.js"], // Utiliser le chemin absolu pour les entités
      synchronize: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
}

module.exports = connectDatabase;
