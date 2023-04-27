import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
    ListItemButton,
    Paper,
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

const url = "http://192.168.1.34:3002/api";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

function Pendencias() {
    const [pendenciaList, setPendenciaList] = useState([]);

    useEffect((data) => {
        Axios.get(url + "/getPendencias").then((data) => {
            setPendenciaList(data.data);
            console.log(data.data);
        });
    }, []);

    return (
        <div>
            <h1>Pendencias</h1>

            <Card sx={{ minWidth: 275 }}>
                <h1 className="titulo">Pendencias dos passageiros</h1>

                <CardContent>
                    {pendenciaList.map((nome_passageiro) => (
                        <Typography
                            style={{ backgroundColor: "#eaeef3" }}
                            component="a"
                            className="textoLista"
                            key={nome_passageiro.id_pendencias}
                        >
                            {"Nome do Passageiro: " +
                                nome_passageiro.nome_passageiro +
                                "   / Valor: " +
                                nome_passageiro.valor +
                                "   / Observação: " +
                                nome_passageiro.obs}
                        </Typography>
                    ))}
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Pendencias;
