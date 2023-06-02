import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Agendamento from './components/agendamento/agendamento';
import Resultado from './components/cliente/resultado'
import "./routes.css";

export default function MainRoutes() {
    return (
        <Router>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/home">Pagina principal</NavLink>
                    </li>
                    <li>
                        <NavLink to="/agendamento">Agendamento de passageiros</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Resultado />} />
                <Route path='/home' element={<Resultado />} />
                <Route path='/agendamento' element={<Agendamento />} />
            </Routes>
        </Router>
    );
}