import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";


dotenv.config();
const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://ai-assistant-frontend-zeta.vercel.app/"], // replace with your actual Vercel URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
