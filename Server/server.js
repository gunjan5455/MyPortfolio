import express from "express";
import cors from "cors";
import mailRouter from "./routes/mailRoutes.js";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import requestIp from "request-ip";
import gunjanMessageScript from "./Scripts/gunjanMessageScript.js";
import sendEmail from "./Utilities/NotificationUtilities.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.set("trust proxy", true);
app.use(requestIp.mw());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const throttlePerIP = rateLimit({
  windowMs: 10 * 60 * 1000, //10 minutes
  max: 1, // 1 request per 10 minutes per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Too many requests. Please try again after 10 minutes.",
  },
});
app.use("/api", throttlePerIP, mailRouter);
app.get("/ping", (req, res) => {
  const ip = req.clientIp;
  console.log("📡 IP Received:", ip);

  sendEmail(
    [process.env.ADMIN],
    "New Visitor Alert: Someone Visited Your Site – IP Logged",
    gunjanMessageScript("NoName", "NoEmail", ip)
  );
  res.status(200).json({ success: true, message: "Server is awake!" });
});
app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
