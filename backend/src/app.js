import express from "express";
import bodyParser from "body-parser";

export const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Olá mundo"));
