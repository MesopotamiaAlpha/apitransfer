# Api de recebimento de formulários

## Inicio do projeto
Este projeto está descontinuado pois a empresa que eu estava desenvolvendo esta solução acabou fechando. A empresa precisava de uma API e painel de controle para que eles pudessem receber os pedidos que estava sendo disparado por um site parceiro, esta ferramenta iria receber um formulário com todos os detalhes do pedido e exibir em um painel onde pudessem efetivar o pedido recebido.

Então basicamente a idéia foi criar a API com express e axios para receber os parametros, iria ser repassado os dados para um banco de dados com Mysql para guardar e organizar todos os dados. Em seguida essas informações seriam repassadas para o Front sendo desenvolvido com React para que o operador possa efetivar o pedido recebido. 
Este projeto iria ter uma melhoria com um dashboard de controle da quantidade de pedidos que receberam e controle de valores etc...


### Importante
Primeiro para rodar o servidor precisa ser feito um arquivo de configuração dentro da pasta config/db.js, este arquivo deve conter estas linhas e configuração:

`
const mysql = require('mysql');

const db = mysql.createConnection({
host: "ipDoServidor",
user: "usuarioDoBancoDeDados",
password: "senhaDoBancoDeDados",
database:"bancoDeDadosAUsar" 
})
module.exports = db;
`