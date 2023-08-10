import express from "express";
import clientes from "./clientesRoutes.js"
import servicos from "./servicosRoutes.js";

const route = (app)=>{
    app.route('/').get((req,res)=>{
            res.status(200).send("Home Page")
    });

    app.use(
        express.json(),
        clientes,
        servicos
    )
}

export default route;