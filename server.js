import express from "express"
import mongoose from "mongoose"
import Data from "./data.js";
import Videos from "./dbModel.js"

// App config
const app = express();
const port = 9001;

// Password --> bOAXX2MBeS22AtRK
// Middle wares
app.use(express.json());
// DB Config
const connection_url = "mongodb+srv://admin:bOAXX2MBeS22AtRK@cluster0.vhajl.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database connected!")).catch(err => console.log(err));

// API endpoints
app.get('/', (req, res) => res.status(200).send("Hello World"));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.post('/v2/posts', (req, res) => {
    // POST request is for adding data to DB
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })

});

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

app.listen(port, () => console.log(`Listening on Local host : ${port}`))
