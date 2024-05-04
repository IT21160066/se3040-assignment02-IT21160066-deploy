import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/dbConn.js";
import AuthRoutes from "./routes/authRoutes.js";
import morgan from "morgan";

const app = express();

const PORT = process.env.PORT || 9000;
connectDB();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/user", AuthRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", (req, res) => {
  res.json("Server is running 👌");
});
