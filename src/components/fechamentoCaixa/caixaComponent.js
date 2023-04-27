import React from "react";
import "./caixaComponent.css";

function calcularCaixa(){
    let nota200 = document.getElementById("nota200").value;
    let nota100 = document.getElementById("nota100").value;
    let nota50 = document.getElementById("nota50").value;
    let nota20 = document.getElementById("nota20").value;
    let nota10 = document.getElementById("nota10").value;
    let nota5 = document.getElementById("nota5").value;
    let nota2 = document.getElementById("nota2").value;
    let moeda1 = document.getElementById("moeda1").value;
    let moeda50 = document.getElementById("moeda50").value;
    let moeda25 = document.getElementById("moeda25").value;
    let moeda10 = document.getElementById("moeda10").value;
    let moeda5 = document.getElementById("moeda5").value;
    let total = (nota200 * 200) + (nota100 * 100) + (nota50 * 50) + (nota20 * 20) + (nota10 * 10) + (nota5 * 5) + (nota2 * 2) + (moeda1 * 1) + (moeda50 * 0.5) + (moeda25 * 0.25) + (moeda10 * 0.1) + (moeda5 * 0.05);
    let resul = `O total do caixa é ${total}`;
    document.getElementById("resul").innerHTML = resul;

    if (total > 150) {
        document.getElementById("resul").style.color = "red";
    } else if (total === 150) {
        document.getElementById("resul").style.color = "green";
    } else if (total < 150) {
        document.getElementById("resul").style.color = "black";
    }

}

function Caixa() {
    return (
        <div className="box">
            <h1 className="titulo2">Caixa</h1>
            <p>Nota 200 <input id="nota200" type="number" placeholder="nota 200" onChange={calcularCaixa}></input> </p>
            <p>Nota 100<input id="nota100" type="number" placeholder="nota 100" onChange={calcularCaixa}></input> </p>
            <p>Nota 50<input id="nota50" type="number" placeholder="nota 50" onChange={calcularCaixa}></input> </p>
            <p>Nota 20 <input id="nota20" type="number" placeholder="nota 20" onChange={calcularCaixa}></input> </p>
            <p>Nota 10 <input id="nota10" type="number" placeholder="nota 10" onChange={calcularCaixa}></input> </p>
            <p>Nota 5 <input id="nota5" type="number" placeholder="nota 5" onChange={calcularCaixa}></input> </p>
            <p>Nota 2 <input id="nota2" type="number" placeholder="nota 2" onChange={calcularCaixa}></input> </p>
            <p>Moeda 1 <input id="moeda1" type="number" placeholder="moeda 1" onChange={calcularCaixa}></input> </p>
            <p>Moeda 50 <input id="moeda50" type="number" placeholder="moeda 50" onChange={calcularCaixa}></input> </p>
            <p>Moeda 25 <input id="moeda25" type="number" placeholder="moeda 25" onChange={calcularCaixa}></input> </p>
            <p>Moeda 10 <input id="moeda10" type="number" placeholder="moeda 10" onChange={calcularCaixa}></input> </p>
            <p>Moeda 5 <input id="moeda5" type="number" placeholder="moeda 5" onChange={calcularCaixa}></input> </p>
            <p id="resul">Total do caixa  </p>
        </div>

    );
}

export default Caixa;