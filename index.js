const fp = require("fastify-plugin");

async function server(fastify, { poolSize = 5 }) {
  console.log("Running with poolSize", poolSize);

  fastify.register(require("fastify-mongoose"), {
    uri: "mongodb://localhost:27020/benchmark",
    poolSize,
  });

  fastify.register(require("./models"));

  fastify.register(require("./routes"));
}

module.exports = fp(server);
