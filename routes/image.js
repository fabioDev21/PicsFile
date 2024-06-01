const express =  require("express")
const router = express.Router()
const upload = require("../config/multer") 
const ImageController = require("../controllers/imageController")


router.post("/images", upload.single("file"),ImageController.create);
router.get("/images/json",ImageController.findAll);
router.delete("/images/:id",ImageController.deleteImage);

module.exports =  router