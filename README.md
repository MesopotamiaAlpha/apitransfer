Api transfer

Inicio do projeto, ajustar algumas coisas.



Primeiro para rodar o servidor precisa ser feito um arquivo de configuração dentro da pasta config/db.js, este arquivo deve conter estas linhas e configuração:

const mysql = require('mysql');

const db = mysql.createConnection({
host: "ipDoServidor",
user: "usuarioDoBancoDeDados",
password: "senhaDoBancoDeDados",
database:"bancoDeDadosAUsar" 
})
module.exports = db;