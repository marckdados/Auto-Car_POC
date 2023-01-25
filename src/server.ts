import express, { json } from "express";
import routers from "./routers/index.js";

const app = express();
app.use(json());
app.use(routers);

app.listen(4000, ()=> console.log("Running port 4000"))
