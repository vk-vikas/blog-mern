import express from "express";
import cors from "cors";
import BDConnection from "./db.js";
import userRouter from "./routes/userRoutes.js";
import postRouter from "./routes/postRoutes.js";

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

BDConnection();
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
