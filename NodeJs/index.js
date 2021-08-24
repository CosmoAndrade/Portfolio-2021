const express = require('express')
const app = express()

const port = 3000;
 
app.get('/', function (req, res) {
  res.send('Hello World Node Js 2021')

})

const lista = [''];



 
app.listen(port , function(){

  console.info('App rodando em http://localhost:' + port);

});


