import React from 'react';
import ReactDOM from 'react-dom';

import Pai from './components/Pai';
import Filho from './components/Filho';
//import Saudacao from './components/Saudacao';
//import Multi from './components/Multiplos';
//import { BoaTarde, BoaNoite } from './components/Multiplos';
//import BomDia from './components/BomDia';
//import Primeiro from './components/Primeiro';


ReactDOM.render(
//<Primeiro />
//<BomDia nome="Felipe" />
<div>
    <Pai nome="Paulo" sobrenome="Silva">
        <Filho nome="Pedro" sobrenome="Silva" />
        <Filho nome="Paulo" sobrenome="Silva" />
        <Filho nome="Carla" sobrenome="Silva" />
    </Pai>
    {/* <Saudacao tipo="Bom dia" nome="Joao" /> */}
    {/* <Multi.BoaTarde nome="Ana" />
     <Multi.BoaNoite nome="Maria" /> */}
    {/* <BoaTarde nome="Ana" />
    <BoaNoite nome="Maria" /> */}
     
</div>
, document.getElementById('root'));