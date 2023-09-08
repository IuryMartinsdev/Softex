const express = require("express")
const { get } = require("express/lib/response")


const app = express()

app.use(express.json())

const PORT = 3333


app.post("/", (req, res)=>{
    res.send("Bem vindo")
})

app.listen(PORT, ()=>{
    console.log("Servidor rodando...")
})


app.post("/cadastrar/:id", (req, res)=>{
    const id = req.params.id
    res.send(`Bem vindo usuario id: ${id}`)
})

app.post("/usuario", (req, res)=>{
    const dados = req.body
    console.log(dados)
})
