import React from "react";
import './restanteComponent.css';

function nrestCaixa() {
    let nnota200 = document.getElementById("nnota200").value;
    let nnota100 = document.getElementById("nnota100").value;
    let nnota50 = document.getElementById("nnota50").value;
    let nnota20 = document.getElementById("nnota20").value;
    let nnota10 = document.getElementById("nnota10").value;
    let nnota5 = document.getElementById("nnota5").value;
    let nnota2 = document.getElementById("nnota2").value;
    let nmoeda1 = document.getElementById("nmoeda1").value;
    let nmoeda50 = document.getElementById("nmoeda50").value;
    let nmoeda25 = document.getElementById("nmoeda25").value;
    let nmoeda10 = document.getElementById("nmoeda10").value;
    let nmoeda5 = document.getElementById("nmoeda5").value;
    let ntotal = (nnota200 * 200) + (nnota100 * 100) + (nnota50 * 50) + (nnota20 * 20) + (nnota10 * 10) + (nnota5 * 5) + (nnota2 * 2) + (nmoeda1 * 1) + (nmoeda50 * 0.5) + (nmoeda25 * 0.25) + (nmoeda10 * 0.1) + (nmoeda5 * 0.05);
    let nresul = `O total do caixa é ${ntotal}`;
    document.getElementById("nresul").innerHTML = nresul;

    if (ntotal > 150) {
        document.getElementById("nresul").style.color = "red";
    } else if (ntotal === 150) {
        document.getElementById("nresul").style.color = "green";
    } else if (ntotal < 150) {
        document.getElementById("nresul").style.color = "black";
    }

}

function RestanteCaixa() {
    return (
        <div className="box2">
            <h1 className="titulo2">Restante no Caixa</h1>

            <p>Nota 200 <input id="nnota200" type="number" placeholder="nota 200" onChange={nrestCaixa}></input> </p>
            <p>Nota 100<input id="nnota100" type="number" placeholder="nota 100" onChange={nrestCaixa}></input> </p>
            <p>Nota 50<input id="nnota50" type="number" placeholder="nota 50" onChange={nrestCaixa}></input> </p>
            <p>Nota 20 <input id="nnota20" type="number" placeholder="nota 20" onChange={nrestCaixa}></input> </p>
            <p>Nota 10 <input id="nnota10" type="number" placeholder="nota 10" onChange={nrestCaixa}></input> </p>
            <p>Nota 5 <input id="nnota5" type="number" placeholder="nota 5" onChange={nrestCaixa}></input> </p>
            <p>Nota 2 <input id="nnota2" type="number" placeholder="nota 2" onChange={nrestCaixa}></input> </p>
            <p>Moeda 1 <input id="nmoeda1" type="number" placeholder="moeda 1" onChange={nrestCaixa}></input> </p>
            <p>Moeda 50 <input id="nmoeda50" type="number" placeholder="moeda 50" onChange={nrestCaixa}></input> </p>
            <p>Moeda 25 <input id="nmoeda25" type="number" placeholder="moeda 25" onChange={nrestCaixa}></input> </p>
            <p>Moeda 10 <input id="nmoeda10" type="number" placeholder="moeda 10" onChange={nrestCaixa}></input> </p>
            <p>Moeda 5 <input id="nmoeda5" type="number" placeholder="moeda 5" onChange={nrestCaixa}></input> </p>
            <p id="nresul">Total do caixa  </p>


        </div>
    );
}

export default RestanteCaixa;