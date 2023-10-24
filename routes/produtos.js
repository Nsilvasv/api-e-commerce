import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.send("rota get funfando")
})

router.get("/:id", (req, res) => {
    res.send("get id funfando")
})

router.post("/", (req, res) => {
    res.send("rota post funfando")
})

router.put("/", (req, res) => {
    res.send("rota put funfando")
})

router.delete("/", (req, res) => {
    res.send("rota delete funfando")
})

export default router