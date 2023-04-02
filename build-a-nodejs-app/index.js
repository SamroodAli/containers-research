const http = require("http");

// needed because otherwise node will ignore SIGINT signals (control + c signals)
// from the docker host
process.on("SIGINT", () => {
  process.exit();
});

http
  .createServer(function (_, response) {
    console.log("request received");
    response.end("hello world from the node server", "utf-8");
  })
  .listen(3000, () => {
    console.log("server started");
  });
