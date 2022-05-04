//importar o express (que é o nosso framework de backend)
const express = require("express")  //é a mesma coisa que importar dessa maneira: import express from "express"
//iniciar o express (instanciar o express) = criar uma instancia do express
const app = express()
//configurar para que o servidor esteja PRONTO pra receber e enviar arquivos em formato JSON
app.use(express.json())

const personas = [
    { nome: "karen", idade: 29 },
    { nome: "renata", idade: 23 },
    { nome: "priscila", idade: 31 }
]

//rota para pegar todas as personas
app.get("/personas", (req, res) => {
    return res.status(213).json(personas)
})

app.post("/criar-persona", (req, res) => {

    console.log(req.body)
    personas.push(req.body)
    
    return res.status(201).json(personas)
})










//! http://localhost:4000/
app.listen(4000, () => {
    console.log("Servidor rodando na porta http://localhost:4000/")
})