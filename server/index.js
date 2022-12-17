import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import ansi from "./node_modules/ansi-colors-es6/index.js";
import postRoute from "./routes/posts.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoute);

const CONNECTION_URL = process.env.DB_CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", true);

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) =>
    console.log(
      ansi.green.bold.underline(`MongoDB Connected: ${conn.connection.host}`)
    )
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(ansi.green.bold.underline(`Server running on port: ${PORT}`))
    )
  )
  .catch((err) => console.log(ansi.red(err.message)));
