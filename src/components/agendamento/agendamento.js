import React, { useEffect, useState } from "react";
import "./agendamento";
import "./agendamento_cli.css";
import Axios from 'axios';
import { Checkbox, Paper, Button } from '@mui/material';
import SendIcon from '@material-ui/icons/Send';



function Agendamento_cli() {

    const [userDestinatario, setDestinatario] = useState("");
    const [userEndPartida, setEndPartida] = useState("");
    const [userPontoRefPart, setPontoRefPart] = useState("");
    const [useNumEndPartida, setNumEndPartida] = useState("");
    const [useEndDestino, setEndDestino] = useState("");
    const [useNumEndDestino, setNumEndDestino] = useState("");
    const [userPontoRefDest, setPontoRefDest] = useState("");
    let [userTipo, setTipo] = useState("");
    const [userCte, setCte] = useState("");
    const [userData, setData] = useState("");

    const submitPost = () => {
        //lembrar de colocar o ip externo  "http://djzefx.ddns.net:3002/api/create"
        Axios.post('http://192.168.0.113:3002/api/create', { userDestinatario: userDestinatario, userTipo: userTipo, userCte: userCte, userData: userData }).then(res => {
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
            <Paper elevation={12} style={{ padding: 1, backgroundColor: "#e55e16", border: "5px solid #002021" }}  >
                <h1 className="titulo2">Fazer pedido de Transfer</h1>
                <input className="inpNomeCompleto" type="text" placeholder="Nome completo*" onChange={(e) => {setDestinatario(e.target.value) }} />
                <input className="inpEndPartida" type="text" placeholder="Endereço de partida" onChange={(e) => {setDestinatario(e.target.value) }} />
                <input className="inpNumEndPartida" type="number" placeholder="Numero do Endereço de partida" onChange={(e) => {setDestinatario(e.target.value) }} />
                <input className="inpPontoRefPart" type="text" placeholder="Ponto de referencia Partida" onChange={(e) => {setDestinatario(e.target.value) }} />
                <input className="inpEndDestino" type="text" placeholder="Endereço de destino" onChange={(e) => {setDestinatario(e.target.value) }} />
                <input className="inpNumEndDEstino" type="number" placeholder="Numero do Endereço de destino" onChange={(e) => {setDestinatario(e.target.value) }} />
                <input className="inpPontoRefDestino" type="text" placeholder="Ponto de referencia Destino" onChange={(e) => {setDestinatario(e.target.value) }} />
                <input className="inpTelefone" type="number" placeholder="Telefone com DDD*" onChange={(e) => { setCte(e.target.value) }} />
                <input className="inpData" type="date" onChange={(e) => { setData(e.target.value) }} />

                <div className="boxTipo">
                    <Checkbox className="boxTipo" style={{ color: "white"}} onClick={() => {
                        userTipo = "Dinheiro";
                        console.log(userTipo);
                    }} />
                    <p className="textoTipo" >Dinheiro *</p>

                    <Checkbox className="boxTipo" style={{ color: "white"}} onClick={() => {
                        userTipo = "Cartão";
                        console.log(userTipo);
                    }} />
                    <p className="textoTipo">Cartão de Crédito *</p>


                    <Checkbox className="boxTipo" style={{ color: "white"}} onClick={() => {
                        userTipo = "Cartão";
                        console.log(userTipo);
                    }} />
                    <p className="textoTipo">Cartão de Débito</p>
                </div>


                <Button className="btnCadastro" variante="contained" style={{ color: "#ed7723"}} endIcon={<SendIcon />} onClick={submitPost}>Fazer o pedido</Button>

            </Paper>
        </div>
        
    );
}

export default Agendamento_cli;
