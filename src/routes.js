import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import FechamentoCaixa from './components/fechamentoCaixa/fechamentoCaixa';
import Agendamento from './components/agendamento/agendamento';
import Estoque from './components/estoque/estoque';
import Pendencias from './components/pendencias/pendencias';
import Transbordo from './components/transbordo/transbordoComponent'; 
import Resultado from './components/cliente/resultado'  
import "./routes.css";
import Agendamento_cli from './components/agendamento/agendamento';

export default function MainRoutes() {
    return (
        <Router>

            <NavLink style={
                {
                    color: '#fff',
                    textDecoration: 'none',
                    marginLeft: '10px',
                    marginRight: '10px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    backgroundColor: '#00bcd4',
                    borderRadius: '5px',
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    border: '1px solid #00bcd4',
                    justifyContent: 'center',
                }
            } to="/home">Pagina principal</NavLink>
            <NavLink style={
                {
                    color: '#fff',
                    textDecoration: 'none',
                    marginLeft: '10px',
                    marginRight: '10px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    backgroundColor: '#00bcd4',
                    borderRadius: '5px',
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    border: '1px solid #00bcd4',
                    justifyContent: 'center',
                }
            } to="/fechamentoCaixa" >Fechamento Caixa</NavLink>
            <NavLink style={
                {
                    color: '#fff',
                    textDecoration: 'none',
                    marginLeft: '10px',
                    marginRight: '10px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    backgroundColor: '#00bcd4',
                    borderRadius: '5px',
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    border: '1px solid #00bcd4',
                    justifyContent: 'center',
                }
            } to="/agendamento">Agendamento de passageiros</NavLink>
            <NavLink style={
                {
                    color: '#fff',
                    textDecoration: 'none',
                    marginLeft: '10px',
                    marginRight: '10px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    backgroundColor: '#00bcd4',
                    borderRadius: '5px',
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    border: '1px solid #00bcd4',
                    justifyContent: 'center',
                }
            } to="/pendencias">Pendencias passageiros</NavLink>
            <NavLink style={
                {
                    color: '#fff',
                    textDecoration: 'none',
                    marginLeft: '10px',
                    marginRight: '10px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    backgroundColor: '#00bcd4',
                    borderRadius: '5px',
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    border: '1px solid #00bcd4',
                    justifyContent: 'center',
                }
            } to="/transbordo">Lista de transbordos</NavLink>

            <Routes>
                <Route path='/' element={<Resultado/>} />
                <Route path='/home' element={<Resultado />} />
                <Route path='/agendamento' element={<Agendamento />} />
                <Route path='/fechamentoCaixa' element={<FechamentoCaixa />} />
                <Route path='/estoque' element={<Estoque />} />
                <Route path='/pendencias' element={<Pendencias />} />
                <Route path='/transbordo' element={<Transbordo />} />
            </Routes>

        </Router>
    );

}