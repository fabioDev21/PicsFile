const ImageSchema =  require("../models/image")
const fs = require("fs")


exports.create = async (req, res) => {
    try {
        const { name } = req.body
        const { local } = req.body

        const file = req.file

        const picture = new ImageSchema({
            name,
            local,
            src: file.path,
        })
        await picture.save()
        res.redirect("/images")
    } catch (error) {
        console.log("Erro ao salvar imagem")
    }
}

exports.findAll = async (req, res) => {
    try {
        const pictures = await ImageSchema.find()
        res.json(pictures)
    } catch (error) {
        console.log("Erro ao carregar imagens")
    }
}

exports.deleteImage = async (req, res) => {
    try{   
        const imagem = await ImageSchema.findById(req.params.id)
        await ImageSchema.findByIdAndDelete(req.params.id);
        fs.unlinkSync(imagem.src)

        res.redirect("/images")
    } catch(error){
        console.log(req.params.id)
        console.log("Não foi possível deletar a imagem")
        console.error(error)
    }
}