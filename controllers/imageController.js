const ImageSchema =  require("../models/image.js")

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