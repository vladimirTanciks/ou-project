import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { newReportRouter } from "./routes/newReport";
import { getAllReportsRouter } from "./routes/getReports";

import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(cors());
app.use(
  cors({
    origin: "*",
  })
);
app.use(json());

app.use(newReportRouter);
app.use(getAllReportsRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vtanciks:50C1LjTqCgRSea7Q@cluster0.2xyeb.mongodb.net/reports-db?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );

    console.log("Connected to reports DB");
  } catch (err) {
    console.log(err);
  }
};

app.listen(3090, () => {
  console.log('Listening on port 3090"');
});

start();
