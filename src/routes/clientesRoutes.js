import express from "express";
import clientesController from "../controllers/clientesController.js";

const router = express.Router();

router
.get('/clientes',clientesController.listarClientes)
.post('/clientes',clientesController.cadastrarClientes)


export default router;