import React, { useEffect, useState } from "react";
import "./cadastro_pri";
import "./cadastro_pri.css";
import Axios from 'axios';
import { Checkbox, Paper, Button } from '@mui/material';
import SendIcon from '@material-ui/icons/Send';
import Resultado_Pri from './resultado';




function Cadastro_Pri() {

    const [userDestinatario, setDestinatario] = useState("");
    let [userTipo, setTipo] = useState("");
    const [userCte, setCte] = useState("");
    const [userData, setData] = useState("");

    const submitPost = () => {
        Axios.post('http://192.168.1.23:3002/api/create', { userDestinatario: userDestinatario, userTipo: userTipo, userCte: userCte, userData: userData }).then(res => {
            console.log(res);
            
        }, err => {
            console.log(err);
            window.alert("Erro ao consultar o banco de dados, informe ao Adm!");
        }
        );
        window.alert("Cadastro realizado com sucesso!");
    };


    return (
        <div className="quadro1">
            <Paper elevation={12} style={{ padding: 1, backgroundColor: "#002021", border: "5px solid #ed7723" }}  >
                <h1 className="titulo">Cadastrar o prinex</h1>
                <input className="inpDestinatario" type="text" placeholder="Destinatario" onChange={(e) => {setDestinatario(e.target.value) }} />
                <input className="inpCte" type="number" placeholder="CTE" onChange={(e) => { setCte(e.target.value) }} />
                <input className="inpData" type="date" onChange={(e) => { setData(e.target.value) }} />

                <div className="boxTipo">
                    <Checkbox className="boxTipo" style={{ color: "white"}} onClick={() => {
                        userTipo = "Envelope";
                        console.log(userTipo);
                    }} />

                    <p className="textoTipo" >Envelope</p>
                    <Checkbox className="boxTipo" style={{ color: "white"}} onClick={() => {
                        userTipo = "Caixa";
                        console.log(userTipo);
                    }} />
                    <p className="textoTipo">Caixa </p>
                </div>


                <Button className="btnCadastro" variante="contained" style={{ color: "#ed7723"}} endIcon={<SendIcon />} onClick={submitPost}>Cadastrar</Button>

            </Paper>

            <Resultado_Pri />
        </div>
        
    );
}

export default Cadastro_Pri;
