import express from "express";
import router from "./routes/produtos.js";

const app = express()

app.use("/", router)

app.listen(3000, () => {
    console.log("server runing");
})