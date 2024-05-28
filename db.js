const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config()

mongoose.set("strictQuery", true)

async function main(){
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qje6xk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log("Conectado no banco de dados!")
}
main().catch((err) => console.log(err))
module.exports = main()