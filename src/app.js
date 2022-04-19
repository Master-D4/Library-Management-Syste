import express from "express";
import cors from "cors";
import 'dotenv/config';
import logger from "./utils/logger";

const app = express();
const PORT = process.env.PORT || "8050";

app.use(cors());
app.use(express.json({ limit: "20mb"}));

app.get("/", (req, res, next) => {
    res.send("<h2> 📚Library Management System API </h2>");
    next();
});

app.listen(PORT, () => {
    //logger.info("This is testing");
    //logger.error("This is Error");
    //logger.warn("This is Warning");
    logger.info("🚀 Server is up and running on PORT"); 
});