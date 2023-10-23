import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("rota get funfando")
})

app.get("/:id", (req, res) => {
    res.send("get id funfando")
})

app.post("/", (req, res) => {
    res.send("rota post funfando")
})

app.put("/", (req, res) => {
    res.send("rota put funfando")
})

app.delete("/", (req, res) => {
    res.send("rota delete funfando")
})

app.listen(3000, () => {
    console.log("server runing");
})