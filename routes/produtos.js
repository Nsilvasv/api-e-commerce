import { Router } from "express";
import produtoController from "../controllers/produto.js";

const router = Router()

router.get("/produtos", produtoController.getProdutos)

router.get("/produtos/:id", produtoController.getProdutosId)

router.post("/produtos", produtoController.postProdutos)

export default router