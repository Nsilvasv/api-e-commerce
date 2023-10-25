import mongoose from "mongoose"

const produtoSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    marca: { type: String },
    preco: { type: Number },
}, { versionKey: false });

const produto = mongoose.model("produtos", produtoSchema);

export default produto;
