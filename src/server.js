import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import exp from "constants";
import testRouter from "./routes/TestRoute.js"
import { connectDatabase } from "./config/dataBase.js";
import { config } from "dotenv";
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 4444;

app.use(express.json());

app.use("/exemplo", testRouter)

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

connectDatabase();