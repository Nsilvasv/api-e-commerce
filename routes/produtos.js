import { Router } from "express";

const router = Router()

function buscaProduto(id) {    
    return produtos.findIndex(produto => {
        return produto.id === Number(id)
    })
}

router.get("/produtos", (req, res) => {
    res.status(200).json(produtos)
})

router.get("/produtos/:id", (req, res) => {
    const index = buscaProduto(req.params.id)
    res.status(200).json(produtos[index])
})

router.post("/produtos", (req, res) => {
    produtos.push(req.body)
    res.status(201).send("Novo item inserido com sucesso!")
})

router.put("/produtos/:id", (req, res) => {
    const index = buscaProduto(req.params.id)
    produtos[index].nome = req.body.nome
    res.status(200).json(produtos[index])
})

router.delete("/produtos/:id", (req, res) => {
    const index = buscaProduto(req.params.id)
    produtos.splice(index, 1)
    res.status(200).send("Item deletado com sucesso!")
})

export default router