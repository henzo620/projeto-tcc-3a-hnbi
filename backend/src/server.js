import express from "express";


const server = express();

const users = [
    {id: 1, name: "Adriel", gender: "m", email: "adriel@email.com"},
    {id: 1, name: "Barbosa", gender: "m", email: "barbosa@email.com"},
    {id: 1, name: "Estevan", gender: "m", email: "estevan@email.com"},
    {id: 1, name: "Maria", gender: "f", email: "maria@email.com"},
];

server.get("/", (req, res)=>{
    res.send("rota raiz")
});

server.get("/users/:id",(req, res)=>{
    const id = parseInt(req.params.id);
    const users = users.find(u => u.id === id);
    return res.status(200).json({
        error: false,
        menssage: "user found",
        result: user
    });
});

server.get('/users',(req, res)=>{
    return res.status(200).json({
        error: false,
        message: "users list",
        result: users,
    });
});


server.listen(3000, ()=>{
    console.log("O Servidor ta na porta 3k")
});