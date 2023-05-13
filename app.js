const express = require("express")
const app = express()
const port = process.env.PORT || 3003;
const path = require('path')

app.listen(port, () => console.log("Server Listening on " + port));

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

