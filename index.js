const express = require("express")
const app = express()
const path = require("path")

app.set("view engine", "ejs")
app.use('/public', express.static(path.join(__dirname, "public")))

const dotenv = require("dotenv");
dotenv.config()

const { main } = require('./db.js');
console.log(main)

const port = process.env.PORT || 4004

const ImageRouter = require("./routes/image.js")

app.get("/", (req, res) => (
    res.render("index")
))

app.get("/images", (req, res) => {
    res.render("app")
})

app.use("/images", (req, res) => { ImageRouter.create })

app.listen(port, () => {
    console.log("Servidor online na porta!"+ port)
})