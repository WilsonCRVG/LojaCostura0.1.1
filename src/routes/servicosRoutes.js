import express from "express";
import servicosController from "../controllers/servicosController.js";

const router = express.Router();

router
.get('/servicos',servicosController.listarServicos)
.get('/servicos/:id',servicosController.listarPorId)
.get('/servicoData/:dataEntrega',servicosController.listarPorDataEntrega)

.post('/servicos',servicosController.cadastrarServicos)
.put('/servicos/:id',servicosController.atualizaServicos)
.delete('/servicos/:id',servicosController.deletarServico)


export default router;