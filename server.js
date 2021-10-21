import express from "express"
import mongoose from "mongoose"
import Data from "./data.js";


// App config
const app = express();
const port = 9000;
// Password --> bOAXX2MBeS22AtRK
// Middle wares

// DB Config
const connection_url = "mongodb+srv://admin:bOAXX2MBeS22AtRK@cluster0.vhajl.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database connected!")).catch(err => console.log(err));


// API endpoints
app.get('/', (req, res) => res.status(200).send("Hello World"));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.listen(port, () => console.log(`Listening on Local host : ${port}`))
