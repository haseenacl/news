import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const RENDER_URL = "https://news-mw5j.onrender.com"; // Your live URL

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "News Aggregator API",
      version: "1.0.0",
      description: "API documentation for fetching news using NewsAPI.org",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
      {
        url: RENDER_URL,
        description: "Render Production Server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log("✅ Swagger docs available at:");
  console.log("   Local:    http://localhost:5000/api-docs");
  console.log(`   Render:   ${RENDER_URL}/api-docs`);
};
