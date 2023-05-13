const express = require("express")
const app = express()
const port = process.env.PORT || 3003;
const path = require('path')

app.listen(port, () => console.log("Server Listening on " + port));

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.status(404).send('what???')
});