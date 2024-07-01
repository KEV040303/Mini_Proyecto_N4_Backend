import express from "express";
import fs from "fs";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { corsValidation } from "./middlewares/cors.middleware.js";
import userRoute from "./routes/user.routes.js";

const app = express();
app.use(express.json());
app.use(corsValidation);

app.use("/uploads", express.static(path.resolve("uploads")));

app.use("/api/user", userRoute);

const pathToFile = path.resolve("./src/config/swagger/swagger-output.json");
const swaggerFile = await fs.promises
  .readFile(pathToFile, "utf8")
  .then(JSON.parse);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((req, res, next) => {
  res.status(404).json({ message: "End point not found" });
});

export default app;
