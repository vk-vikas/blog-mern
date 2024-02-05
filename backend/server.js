import express from "express";
import cors from "cors";
import BDConnection from "./db.js";

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

BDConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
