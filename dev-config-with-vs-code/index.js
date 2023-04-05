// more-or-less the example code from the hapi-pino repo
const hapi = require("@hapi/hapi");

async function start() {
  const server = hapi.server({
    host: "0.0.0.0", // this cannot be localhost if this is running in a container
    // In the context of running inside a container, the localhost address typically refers to the loopback interface of the container itself, not the host machine on which the container is running. Therefore, if you set the host to localhost in the container, the server will not be accessible from outside the container, since it is bound only to the loopback interface of the container.

    // To make the server accessible from outside the container, you need to bind it to a network interface that is accessible from outside the container. In most cases, you can use 0.0.0.0 as the host address to bind the server to all network interfaces, making it accessible from outside the container. This is what the example code is doing by setting host to 0.0.0.0.
    port: process.env.PORT || 3000,
  });

  server.route({
    method: "GET",
    path: "/",
    handler() {
      return { success: true };
    },
  });

  await server.register({
    plugin: require("hapi-pino"),
  });

  await server.start();

  return server;
}

start().catch((err) => {
  console.log(err);
  process.exit(1);
});
