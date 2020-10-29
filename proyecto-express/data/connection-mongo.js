// Importamos cliente de mongo
// const mongoClient = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");
require('dotenv').config()

// Crear variables de entorno, sacar hardcode del cluster connection

// Cadena de conexion para mongo
const uriMongo = process.env.URIMONGO;

const client = new MongoClient(uriMongo, { useUnifiedTopology: true, useNewUrlParser: true });

async function getConnection() {
   return await client.connect().catch((err) => console.log(err));
}

module.exports = { getConnection };
