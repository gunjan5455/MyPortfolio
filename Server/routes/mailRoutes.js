import express from "express";
import { sendMailer } from "../controller/mailController.js";

const mailRouter = express.Router();

mailRouter.post("/mail", sendMailer);
export default mailRouter;
