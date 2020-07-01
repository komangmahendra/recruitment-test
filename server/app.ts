import dotenv from "dotenv";
import express from "express";
import cors from "cors";

// error handler
import errorHandler from "./helpers/errorHandler";

// routes
import routes from "./routes";

dotenv.config();

// init express
const app = express();

const corsHandler = cors({
  origin: true,
});

app.use(corsHandler);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app
  .use("/", routes)
  .use((req, res, next) => {
    res.status(404).send({ message: "NOT_FOUND" });
  })
  .use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`listen on port ${process.env.PORT}`);
});
