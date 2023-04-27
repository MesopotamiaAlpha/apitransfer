import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(destino, carregar) {
    return { destino, carregar };
}

const rows = [
    createData('Curitiba', 80060980),
    createData('Francisco beltrão', 85501020 ),
    createData('Palmas', 77024540),
    createData('Marmeleiro', 85615000),
    createData('Mariopolis',85525000),
    createData('General Carneiro', 84660000),
    createData('União da vitória', 84500000),
    createData('São matheus do Sul', 83900000),
    createData('Pranchita', 85730000),
    createData('Barracão', 85700000),
    createData('Laranjeiras do Sul', 85301290),
    createData('Chapeco', 89805510),
    createData('Chopinzinho', 85560000),
    createData('Telêmaco Borba', 84261200),
    createData('Canta Galo', 85160000),
    createData('Birituna', 84640000),
    createData('Céu Azul', 85900005),
    createData('Corbélia', 85420000),
    createData('Dois Vizinhos', 85660000),
];


function Cep() {
    return (
        <div classname="tabelaTransbordo">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Cidade</TableCell>
                            <TableCell align="center">Cep Destino</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.destino}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {row.destino}
                                </TableCell>
                                <TableCell align="center">{row.carregar}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        </div>
    );
}

export default Cep;