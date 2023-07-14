import express from "express";
import clientes from "./clientesRoutes.js"
const route = (app)=>{
    app.route('/').get((req,res)=>{
            res.status(200).send("Home Page")
    });

    app.use(
        express.json(),
        clientes
    )
}

export default route;