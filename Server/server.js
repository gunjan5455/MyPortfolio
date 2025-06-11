import express from "express";
import cors from "cors";
import mailRouter from "./routes/mailRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // <-- needed for form data

app.use("/api", mailRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
