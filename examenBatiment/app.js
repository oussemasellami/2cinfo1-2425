const http = require("http");
const express = require("express");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const mongoconnect = require("./config/dbconnection.json");
const path = require("path");
const {
  getallNiveau,
  construction,
  calculBatiemnt,
} = require("./controller/batimentcontroller");
const { add } = require("./controller/chatcontroller");
const {
  addpartiesocket,
  affichesocket,
} = require("./controller/joueurcontroller");
mongo
  .connect(mongoconnect.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo connecter"))
  .catch((err) => console.log(err));

const classroomrouter = require("./routes/classroom");
const joueurrouter = require("./routes/joueur");
const batimentrouter = require("./routes/batiment");
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/classrom", classroomrouter);
app.use("/joueur", joueurrouter);
app.use("/batiment", batimentrouter);

const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", async (socket) => {
  console.log("user connected");
  socket.emit("msg", "user is connected");
  const lb = await getallNiveau();
  socket.emit("msg", JSON.stringify(lb));
  socket.on("partie", (data) => {
    addpartiesocket(data);
    io.emit("partie", data);
  });

  socket.on("construire", async (data) => {
    req = { params: { id: data } };
    await construction(req);
    const lb = await getallNiveau();
    socket.emit("msg", JSON.stringify(lb));
  });

  socket.on("aff", async (data) => {
    const r = await affichesocket(data);
    console.log("jjjjjj", JSON.stringify(r));
    io.emit("aff", r);
  });

  socket.on("calcul", async (data) => {
    const c = await calculBatiemnt();
    console.log("jjjjjj", "la somme des niveaux est :" + JSON.stringify(c));
    io.emit("msg", "la somme des niveaux est :" + JSON.stringify(c));
  });

  socket.on("typing", (data) => {
    io.emit("typing", data + "is typing");
  });

  socket.on("msg", (data) => {
    add(data.object);
    io.emit("msg", data.name + ":" + data.object);
  });

  socket.on("disconnect", () => {
    console.log("user disconnect");
    io.emit("msg", "user disconnect");
  });
});
server.listen(3000, console.log("server run"));
module.exports = app;
