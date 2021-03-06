const express = require("express")
const app = express()

app.get('/', function(req,res){
    res.send("  Hello Word! ")
})

app.get("/blog/:artigo?",function(req,res){

    let artigo = req.params.artigo
    if (artigo){
        res.send("<h2>Artigo: " + artigo + " </h2>")
    }else{
        res.send( "Bem Vindo ao Blog !")
    }

   
})

app.get('/ola/:nome',function(req,res){
    var nome = req.params.nome
    res.send('<h1> Hello ' + nome + '</h1>')
})


app.listen(4000,function(erro){
    if(erro){
        console.log('Ocorreu um erro!')
    }else{
        console.log('Servidor inicilizado com sucesso!')
        console.log(' http://localhost:4000/')
    }
})



