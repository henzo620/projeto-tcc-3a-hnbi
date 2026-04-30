import express from "express";


const server = express();

server.get("/", (req, res)=>{
    res.send("rota raiz")
});

server.listen(3000, ()=>{
    console.log("O Servidor ta na porta 3k")
});