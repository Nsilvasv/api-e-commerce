import produto from "../models/produto.js";

class produtoController {

    static async getProdutos (req, res) {
        try {
            const listaProdutos = await produto.find({})
            res.status(200).json(listaProdutos)
        } catch (error) {
            res.status(500).json({message: `${error.message} falha na requisição`})
        }
        
    }

    static async getProdutosId (req, res) {
        try {
            const id = req.params.id
            const produtoId = await produto.findById(id)
            res.status(200).json(produtoId)
        } catch (error) {
            res.status(500).json({message: `${error.message} falha na requisição`})
        }
        
    }

    static async postProdutos (req, res) {
        try {
            const newProduto = await produto.create(req.body)
            res.status(201).json({ message: "produto criado", produto: newProduto })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar produto` });
        }
    } 


}

export default produtoController