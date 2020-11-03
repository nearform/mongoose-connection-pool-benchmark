const crypto = require("crypto");
const fp = require("fastify-plugin");

async function routes(fastify) {
  fastify.get("/models", async () => {
    return fastify.mongo.db.models.Model.find().exec();
  });

  fastify.post("/models", async () => {
    return fastify.mongo.db.models.Model.create(
      Array(100)
        .fill(null)
        .map(() => ({
          name: Math.random().toString(36),
          data: crypto.randomBytes(20).toString("hex"),
        }))
    );
  });
}

module.exports = fp(routes);
