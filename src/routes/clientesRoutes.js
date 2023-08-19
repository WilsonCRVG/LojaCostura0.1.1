import express from "express";
import clientesController from "../controllers/clientesController.js";

const router = express.Router();

router
.get('/clientes',clientesController.listarClientes)
.get('/clientes/:id',clientesController.lisatarPorId)
.post('/clientes',clientesController.cadastrarClientes)
.put('/clientes/:id',clientesController.atualizarAutores)
.delete('/clientes/:id',clientesController.deletarCliente)


export default router;