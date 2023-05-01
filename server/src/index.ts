import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running and listening to http://localhost:${PORT}`);
});
