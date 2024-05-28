const express =  require("express")
const router = express.Router()

const ImageController = require("../controllers/imageController")

router.post("/images", () => {
    ImageController.create
});

module.exports =  router