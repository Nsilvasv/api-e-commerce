import express from "express";
import router from "./routes/produtos.js";
import conectaDatabase from "./config/dbConnect.js";

const app = express()
app.use(express.json())

const conexao = await conectaDatabase()

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

app.use("/", router)
app.use("/produtos", router)

app.listen(3000, () => {
    console.log("server runing");
})
