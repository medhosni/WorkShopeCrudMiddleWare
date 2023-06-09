import express from "express";
import mongoose from "mongoose";
import gameRoute from "./routes/game.route.js";
import morgan from "morgan";
import cors from "cors"
const app = express();
const port = process.env.port || 9090;
const host = "127.0.0.1";

mongoose
  .connect("mongodb://127.0.0.1:27017/2cinfo4")
  .then(() => {
    console.log("....cnx to the db...  ");
  })
  .catch((err) => {
    console.log(err);
  });
  app.use('/img', express.static('public/images'));

app.use(morgan("dev"))
app.use(cors())
app.use(express.json());
app.use("/game", gameRoute);





app.all("*",(req,res )=> {
res.status(404).json({Message :" route not found "})
})
app.listen(port, host, () => {
  console.log(`3asléma ya 2cinfo4 ${host}:${port}`);
});
