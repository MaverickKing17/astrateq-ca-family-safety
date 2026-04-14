import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Groq AI Chat Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      const apiKey = process.env.GROQ_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "GROQ_API_KEY is not configured on the server." });
      }

      const groq = new Groq({ apiKey });

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are the Astrateq Gadgets Support Assistant. You help Canadian families with aging parents understand our AI-powered automotive safety products: DriveGuard, RoadGuard Pro, and the EV Battery Intelligence Kit. You are professional, caring, and knowledgeable about Canadian driving conditions and safety standards like PIPEDA and AODA. Keep responses concise and helpful."
          },
          ...messages
        ],
        model: "llama-3.3-70b-versatile",
      });

      res.json({ message: completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that." });
    } catch (error) {
      console.error("Groq API Error:", error);
      res.status(500).json({ error: "Failed to communicate with Groq AI." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
