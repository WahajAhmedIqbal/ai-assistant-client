import { generateResponse } from "../services/aiService.js";
import fs from "fs";
import path from "path";

const logsPath = path.resolve("src/data/logs.json");

export const handleTask = (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  // Generate fake AI response
  const result = generateResponse(task);

  // Create log entry
  const log = {
    task,
    result,
    timestamp: new Date().toISOString(),
  };

  // Save it to logs.json
  const logs = fs.existsSync(logsPath)
    ? JSON.parse(fs.readFileSync(logsPath, "utf8"))
    : [];
  logs.push(log);
  fs.writeFileSync(logsPath, JSON.stringify(logs, null, 2));

  // 4️⃣ Send response back
  res.json(log);
};

export const getAllTasks = (req, res) => {
  try {
    const data = fs.readFileSync(logsPath, "utf-8");
    const tasks = JSON.parse(data || "[]");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error reading data", error: error.message });
  }
};
