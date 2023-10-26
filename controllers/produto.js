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

    static async updateProdutosId (req, res) {
        try {
            const id = req.params.id
            await produto.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "produto atualizado" })
        } catch (error) {
            res.status(500).json({message: `${error.message} falha no update`})
        }
    }

    static async deleteProdutosId (req, res) {
        try {
            const id = req.params.id
            await produto.findByIdAndDelete(id)
            res.status(200).json({ message: "produto deletado" })
        } catch (error) {
            res.status(500).json({message: `${error.message} falha na exclusão`})
        }
    }

}

export default produtoController