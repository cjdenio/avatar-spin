const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("HEY LOOK IT ROTATED !!!!");

  console.log("rotating");
  io.emit("yeet");
});

app.get("/view", (req, res) => {
  res.sendFile(__dirname + "/view.html");
});

io.on("connection", (socket) => {
  socket.on("yeet", () => {
    io.emit("yeet");
  });
});

server.listen(3000, () => {
  console.log("listening on :3000");
});
