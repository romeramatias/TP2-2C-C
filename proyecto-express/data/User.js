const connection = require("./connection-mongo");
const ObjectId = require('mongodb').ObjectId;

async function pushUser(user) {
   const connectionMongo = await connection.getConnection();
   const resultado = await connectionMongo.db("ejemplo_tp2").collection("users").insertOne(user);
   return resultado;
}

async function getUserId(id) {
   const connectionMongo = await connection.getConnection();
   id = new ObjectId(id)
   const resultado = await connectionMongo
      .db("ejemplo_tp2")
      .collection("users")
      .findOne({ _id: id });
   return resultado;
}

async function getUserEmail(email) {
   const connectionMongo = await connection.getConnection();
   const resultado = await connectionMongo
      .db("ejemplo_tp2")
      .collection("users")
      .findOne({ email: email });
   return resultado;
}

async function validarPass(email, password) {
   const user = await this.getUserEmail(email);
   if (user.password === password) {
      return true
   } else {
      return false
   }
}

module.exports = { pushUser, getUserId, getUserEmail, validarPass };
