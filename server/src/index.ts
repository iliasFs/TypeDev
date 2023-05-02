import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running and listening to http://localhost:${PORT}`);
});
