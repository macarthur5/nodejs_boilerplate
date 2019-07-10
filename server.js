const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const bodyparser = require("body-parser");

app.use("/shared", express.static("shared"));
app.use(express.static('resources')); //static index
app.use(express.static('controllers')); //static index
app.use(express.static('styles')); //static index
app.use(express.static('views')); //static index
app.use(bodyparser.json()); // support json encoded bodies
app.use(bodyparser.urlencoded({
    extended: false
})); // support encoded bodies
app.use("/", router);


router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

const server = app.listen(7500, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
