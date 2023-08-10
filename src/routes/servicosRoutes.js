import express from "express";
import servicosController from "../controllers/servicosController.js";

const router = express.Router();

router
.get('/servicos',servicosController.listarServicos)
.post('/servicos',servicosController.cadastrarServicos)
//.put('/servicos/:id',servicosController.atualizaServicos)
//.delete('/servicos/:id',servicosController.deletaServicos)


export default router;