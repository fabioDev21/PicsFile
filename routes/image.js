const express =  require("express")
const router = express.Router()
const upload = require("../config/multer") 
const ImageController = require("../controllers/imageController")


router.post("/images", upload.single("file"),ImageController.create);
router.get("/images", () => {ImageController.findAll});

module.exports =  router