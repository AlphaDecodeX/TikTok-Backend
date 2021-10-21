import express from "express"
import mongoose from "mongoose"
import data from "./data";


// App config
const app = express();
const port = 9000;

// Middle wares

// DB Config

// API endpoints
app.get('/', (req, res) => res.status(200).send("Hello World"));

app.listen(port, () => console.log(`Listening on Local host : ${port}`))
