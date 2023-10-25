import { Router } from "express";
import { produtos } from "../data.js";

const router = Router()

function buscaProdutos(id) {
    return produtos.findIndex(produto => {
        return produto.id === Number(id)
    })
}

router.get("/produtos", (req, res) => {
    res.status(200).json(produtos)
})

router.get("/produtos/:id", (req, res) => {
    const index = buscaProdutos(req.params.id)
    res.status(200).json(produtos[index])
})

router.post("/produtos", (req, res) => {
    produtos.push(req.body)
    res.send("produto inserido com sucesso!")
})

router.put("/produtos/:id", (req, res) => {
    const index = buscaProdutos(req.params.id)
    produtos[index].body = req.body
    res.send("Update concluído!")
})

router.delete("/produtos/:id", (req, res) => {
    const index = buscaProdutos(req.params.id)
    produtos.splice(index, 1)
    res.status(201).send("Deletado")
})

export default router