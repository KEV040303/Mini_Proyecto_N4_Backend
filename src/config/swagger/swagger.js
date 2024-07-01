import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "MP_Login",
    description: "Login full stack",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const routes = ["src/app.js"];

swaggerAutogen()(outputFile, routes, doc);
