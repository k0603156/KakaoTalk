module.exports = function(http) {
  const io = require("socket.io")(http);
  io.on("connection", function(socket) {
    console.log("a user connected");
    socket.on("init", function(data) {
      console.log(data.name);
      socket.emit("welcome", `hello! ${data.name}`);
    });
  });
  return io;
};
