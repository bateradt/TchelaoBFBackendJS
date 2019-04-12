const express = require("express")

const routes = express.Router();

routes.get("/home", (req, res) => {
    return res.send("Olá mundo NODE.js teste");
});

module.exports = routes;
