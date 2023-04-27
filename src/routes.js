import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import SearchAppBar from './components/topBar'
import Cadastro_Pri from './components/prinex/cadastro_pri';
import FechamentoCaixa from './components/fechamentoCaixa/fechamentoCaixa';
import Agendamento from './components/agendamento/agendamento';
import Estoque from './components/estoque/estoque';
import Pendencias from './components/pendencias/pendencias';
import Transbordo from './components/transbordo/transbordoComponent';
import Cep from './components/cepPrinex/cepComponent';
import "./routes.css";

export default function MainRoutes() {
    return (
        <Router>

            <SearchAppBar > </SearchAppBar>
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
            } to="/estoque">Estoque</NavLink>
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
            } to="/cep">Cep Prinex</NavLink>

            <Routes>
                <Route path='/' element={<Cadastro_Pri />} />
                <Route path='/home' element={<Cadastro_Pri />} />
                <Route path='/agendamento' element={<Agendamento />} />
                <Route path='/fechamentoCaixa' element={<FechamentoCaixa />} />
                <Route path='/estoque' element={<Estoque />} />
                <Route path='/pendencias' element={<Pendencias />} />
                <Route path='/transbordo' element={<Transbordo />} />
                <Route path='/cep' element={<Cep />} />
            </Routes>

        </Router>
    );

}