const mongoose = require("mongoose");
const fp = require("fastify-plugin");

const { Schema } = mongoose;

const schema = new Schema({
  name: String,
  data: String,
});

async function model(fastify) {
  fastify.mongo.db.model("Model", schema);
}

module.exports = fp(model);
