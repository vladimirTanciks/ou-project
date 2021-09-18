import express, { Request, Response } from "express";
import { body } from "express-validator";

import { Report } from "../models/report";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post(
  "/api/reports/add",
  [body("location"), body("type"), body("size"), body("image"), body("user")],
  validateRequest,
  async (req: Request, res: Response) => {
    console.log("req.body", req.body);
    const { type, size, image, location, details, user } = req.body;

    const report = Report.build({ type, size, image, location, details, user });

    await report.save();

    res.status(201).send(report);
  }
);

export { router as newReportRouter };
