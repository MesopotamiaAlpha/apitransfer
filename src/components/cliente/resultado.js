import React, { useState, useEffect } from "react";
import "./resultado";
import "./resultado.css";
import Axios from "axios";
import { ListItemButton, Button, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const url = "http://192.168.0.114:3002/api";


// esta função traz todos os registros dentro do banco de dados e usa a função map para criar um array de objetos
function Resultado_cli() {
    const [postList, setPostList] = useState([]);

    useEffect((data) => {
        Axios.get(url + "/get").then((data) => {
            setPostList(data.data);
            console.log(data.data);
        });
    }, []);

    function deletPost(id) {
        Axios.delete(url + `/delete/${id}`).then((response) => {
            window.alert("you deleted a post");
        });
    }

    function deletRegistro() {
        window.alert("Registro deletado com sucesso!");
    }

    // dentro do return ele verifica o array e cria um botão para deletar para cada registro dentro do banco de dados, os botoes possuem um id de cada registro para apagar cada um    
    return (

        <Paper className="paper" elevation={12} style={{ padding: 1, backgroundColor: "#eaeef3" }} sx={{ mx: 5, textAlign: 'center' }} >
            <div className="resultado">

                <h1 className="titulo">Transfers solicitados</h1>
                <ul className="listaUl">

                    {postList.map(nome_prinex =>
                        <ListItemButton style={{ backgroundColor: "#eaeef3" }} component="a" className="textoLista" key={nome_prinex.id_pri}>

                            {"Nome do passageiro: " + nome_prinex.destinatario + "   / Tipo Pagamento: " + nome_prinex.tipo + "   / Numero Telefone: " + nome_prinex.cte + "   / Data da viagem: " + nome_prinex.cad_data + "Id Banco:" + nome_prinex.id_pri }
                            
                            <Button className="btnDel" onClick={(() => deletPost(nome_prinex.id_pri))}> <DeleteIcon edge="end"  onClick={deletRegistro}/> </Button>
                        </ListItemButton>)}
                </ul>
            </div>
        </Paper>
    );
}

export default Resultado_cli;
