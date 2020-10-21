// Middleware de verificar token
const config = require("../config");
const jwt = require('jsonwebtoken')

function verificarToken(req, res, next) {
   const token = req.headers["x-access-token"];
   if (!token) {
      return res.status(401).json({ autorizacion: false, mensaje: "No hay ingresado un token" });
   }

   const decoded = jwt.verify(token, config.secret);
   req.userId = decoded.id;
   next();
}

module.exports = verificarToken;
