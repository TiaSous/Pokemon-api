import express from "express";
import { sequelize } from "./db/sequelize.mjs";
import { getPokemon } from "./routes/getPokemon.mjs";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.mjs";

const app = express();
const port = 3000;

sequelize.authenticate().then((_) =>
    console.log("La connexion à la base de données a bien été établie"),
).catch((error) => console.error("Impossible de se connecter à la DB"));



app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
app.use("/api/pokemon", getPokemon);