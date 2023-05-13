const express = require("express")
const app = express()
const port = process.env.PORT || 3003;
const path = require('path')

app.listen(port, () => console.log("Server Listening on " + port));

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

let distance = 0

app.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/data", (req, res) => {
    res.status(200).send({distance})
})

app.get("/update/:distance", (req, res) => {
    distance = parseFloat(req.params.distance)
    res.status(200).send("set distance to " + distance)
})

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404).send('what???')
});