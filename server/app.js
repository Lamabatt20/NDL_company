import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

/* ================= PATH SETUP ================= */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👉 client/public/uploads
const uploadDir = path.join(__dirname, "../client/public/uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// static files
app.use("/uploads", express.static(uploadDir));

/* ================= MULTER ================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) =>
    cb(
      null,
      Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname)
    ),
});

const upload = multer({ storage });

/* ================= COMPANY ================= */
app.get("/company", async (req, res) => {
  try {
    const company = await prisma.companyInfo.findFirst();
    res.json(company);
  } catch {
    res.status(500).json({ error: "Failed to fetch company info" });
  }
});

/* ================= SERVICES ================= */
app.get("/services", async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    res.json(services);
  } catch {
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

/* ================= PROJECT FILTER ROUTES (لازم قبل :id) ================= */

// 🔹 Embedded
app.get("/projects/embedded", async (req, res) => {
  const projects = await prisma.project.findMany({
    where: { isEmbedded: true },
    include: { images: true },
  });
  res.json(projects);
});

// 🔹 Mechanical
app.get("/projects/mechanical", async (req, res) => {
  const projects = await prisma.project.findMany({
    where: { isMechanical: true },
    include: { images: true },
  });
  res.json(projects);
});

// 🔹 General (Home)
app.get("/projects/general", async (req, res) => {
  const projects = await prisma.project.findMany({
    where: {
      isEmbedded: false,
      isMechanical: false,
    },
    include: { images: true },
  });
  res.json(projects);
});

/* ================= ALL PROJECTS ================= */
app.get("/projects", async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: { images: true },
      orderBy: { createdAt: "desc" },
    });
    res.json(projects);
  } catch {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

/* ================= CREATE PROJECT ================= */
app.post("/projects", upload.array("images", 30), async (req, res) => {
  try {
    const {
      title,
      shortDesc,
      description,
      isEmbedded,
      isMechanical,
    } = req.body;

    const imagesData = req.files.map((file) => ({
      imageUrl: `/uploads/${file.filename}`,
    }));

    const project = await prisma.project.create({
      data: {
        title,
        shortDesc,
        description,
        isEmbedded: isEmbedded === "true",
        isMechanical: isMechanical === "true",
        images: { create: imagesData },
      },
      include: { images: true },
    });

    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create project" });
  }
});

/* ================= ADD IMAGE ================= */
app.post("/projects/:id/images", upload.single("image"), async (req, res) => {
  try {
    const projectId = Number(req.params.id);

    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    const image = await prisma.projectImage.create({
      data: {
        imageUrl: `/uploads/${req.file.filename}`,
        projectId,
      },
    });

    res.status(201).json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to upload image" });
  }
});

/* ================= SINGLE PROJECT (آخر Route) ================= */
app.get("/projects/:id", async (req, res) => {
  try {
    const projectId = Number(req.params.id);

    if (isNaN(projectId)) {
      return res.status(400).json({ error: "Invalid project id" });
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: { images: true },
    });

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch project" });
  }
});

/* ================= PARTNERS ================= */
app.get("/partners", async (req, res) => {
  try {
    const partners = await prisma.partner.findMany();
    res.json(partners);
  } catch {
    res.status(500).json({ error: "Failed to fetch partners" });
  }
});

/* ================= STATISTICS ================= */
app.get("/statistics", async (req, res) => {
  try {
    const stats = await prisma.statistic.findMany();
    res.json(stats);
  } catch {
    res.status(500).json({ error: "Failed to fetch statistics" });
  }
});

/* ================= WORKFLOW ================= */
app.get("/workflow", async (req, res) => {
  try {
    const steps = await prisma.workflowStep.findMany({
      orderBy: { stepNumber: "asc" },
    });
    res.json(steps);
  } catch {
    res.status(500).json({ error: "Failed to fetch workflow steps" });
  }
});

/* ================= CAREERS ================= */
app.get("/careers", async (req, res) => {
  try {
    const careers = await prisma.career.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });
    res.json(careers);
  } catch {
    res.status(500).json({ error: "Failed to fetch careers" });
  }
});

/* ================= HEALTH ================= */
app.get("/", (req, res) => {
  res.send("🚀 Engineering Company API is running");
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
