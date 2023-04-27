import React, { useEffect, useState } from "react";
import "./fechamentoCaixa";
import "./fechamentoCaixa.css";
import Caixa from "./caixaComponent";
import RestanteCaixa from "./restanteComponent";


function FechamentoCaixa() {

    return (
        <div className="divGeral">
            <Caixa /> 
            <RestanteCaixa />
        </div>



    );
}
export default FechamentoCaixa;