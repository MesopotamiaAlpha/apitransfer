import React, { useState, useEffect } from "react";
import "./resultado";
import "./resultado.css";
import Axios from "axios";
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const url = "http://192.168.0.115:3002/api";

function Resultado_cli() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        Axios.get(url + "/get").then((response) => {
            setPostList(response.data);
        });
    }, [postList]);

    function deletPost(id) {
        Axios.delete(url + `/delete/${id}`).then((response) => {
          window.alert("you deleted a post");
        });
      }

    function handleDone(id) {
        const newPostList = postList.map(post => {
            if (post.id_pri === id) {
                post.done = !post.done;
            }
            return post;
        });
        setPostList(newPostList);
    }

    return (
        <Paper className="paper" elevation={12} style={{ padding: 1, backgroundColor: "#eaeef3" }} sx={{ mx: 5, textAlign: 'center' }} >
            <div className="resultado">
                <h1 className="titulo">Transfers solicitados</h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Concluído</TableCell>
                                <TableCell>Nome do passageiro</TableCell>
                                <TableCell>Tipo de pagamento</TableCell>
                                <TableCell>Número do telefone</TableCell>
                                <TableCell>Data da viagem</TableCell>
                                <TableCell>Id do Banco</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {postList.length ? (
                                postList.map((nome_prinex) => (
                                    <TableRow
                                        key={nome_prinex.id_pri}
                                        style={{ backgroundColor: nome_prinex.done ? "green" : "#eaeef3" }}
                                    >
                                        <TableCell>
                                            <Checkbox
                                                checked={nome_prinex.done}
                                                onChange={() => handleDone(nome_prinex.id_pri)}
                                            />
                                        </TableCell>
                                        <TableCell>{nome_prinex.destinatario}</TableCell>
                                        <TableCell>{nome_prinex.tipo}</TableCell>
                                        <TableCell>{nome_prinex.cte}</TableCell>
                                        <TableCell>{nome_prinex.cad_data}</TableCell>
                                        <TableCell>{nome_prinex.id_pri}</TableCell>
                                        <TableCell>
                                        <Button className="btnDel" onClick={() => deletPost(nome_prinex.id_pri)}>
                        <DeleteIcon/>
                      </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7} align="center">Carregando...</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Paper>
    );
}

export default Resultado_cli;