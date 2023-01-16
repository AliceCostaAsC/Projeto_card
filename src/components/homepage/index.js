import React from "react";
import "../homepage/homeStyle.css";
import Card from "../card";

import Oshawott from "../imagens/Oshawott.png";
import Wartortle from "../imagens/wartortle.png";
import Piplup from "../imagens/piplup.png"
import Totodile from "../imagens/totodile.png"

 export default function Homepage(){
    return(
        <div className="home">
        <Card img={<img src={Oshawott} alt='' />} title="Oshawott - Nº 0501" desc="Categoria: Lontra marinha" type="Tipo: Água" />
        <Card img={<img src={Wartortle} alt='' />} title="Wartortle - Nº 0008" desc="Categoria: Tartaruga"type="Tipo: Água" />
        <Card img={<img src={Piplup} alt='' />} title="Piplup - Nº 0393" desc="Categoria: Pinguim" type="Tipo: Água"/>
        <Card img={<img src={Totodile} alt='' />} title="Totodile - Nº 0158" desc="Categoria: Grande mandíbula" type="Tipo: Água"/>
        </div>
    )
}