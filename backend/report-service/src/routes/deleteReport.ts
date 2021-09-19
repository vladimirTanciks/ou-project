import express, { Request, Response } from "express";
import { body } from "express-validator";

import { Report } from "../models/report";
import { BadRequestError } from "../errors/bad-request-error";

const router = express.Router();

router.delete(
  "/api/reports/delete/:reportId",
  async (req: Request, res: Response) => {
    const reportId = req.params.reportId;

    const report = await Report.findById(reportId);
    if (!report) {
      throw new BadRequestError("Report not found");
    }

    await Report.findByIdAndRemove(reportId);

    res.status(200).send({ message: "Report deleted" });
  }
);

export { router as deleteReportRouter };
