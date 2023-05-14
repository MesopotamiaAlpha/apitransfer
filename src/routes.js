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
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/home">Pagina principal</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fechamentoCaixa">Reservado</NavLink>
                    </li>
                    <li>
                        <NavLink to="/agendamento">Agendamento de passageiros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pendencias">Pendencias passageiros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/transbordo">Reservado</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Resultado />} />
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