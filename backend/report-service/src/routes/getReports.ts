import express, { Request, Response } from "express";

import { Report } from "../models/report";

const router = express.Router();

router.get("/api/reports/all", async (req: Request, res: Response) => {
  Report.find().then((reports) => {
    res.status(200).json({
      reports,
    });
  });
});

export { router as getAllReportsRouter };
