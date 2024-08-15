const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let count = 0;
let currConns = [];

app.get("/", (req, res) => {
  res.json({
    count: count,
    connections: currConns,
  });
});

const expressServer = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const io = socketio(expressServer, {
  cors: {
    origin: "http://localhost:4000",
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["Content-Type"],
  },
});

io.on("connect", (socket) => {
  console.log(socket.id, "has joined our server");
  count++;
  currConns.push(socket.id);
  io.emit("broadcast", count + " people online");
  
  socket.on("disconnect", () => {
    console.log(socket.id, "has left our server");
    count--;
    
    currConns = currConns.filter(function (currConn) {
      return currConn !== socket.id;
    });
    io.emit("broadcast", count + " people online");
  });
  
});