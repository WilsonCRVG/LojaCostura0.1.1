import express from "express";

const route = (app)=>{
    app.route('/').get((req,res)=>{
            res.status(200).send("Home Page")
    });

    app.use(
        express.json()
    )
}

export default route;