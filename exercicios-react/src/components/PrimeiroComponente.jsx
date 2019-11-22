import React from 'react';

let isLegal = true;

export default (props) => 
        <div>
            <h1>{props.valor}</h1>
            <h2>{1+1}</h2>
            <p>Legal? {isLegal ? 'SIM' : 'NÃO'}</p>
            <p>{Math.random()}</p>
        </div>


// export default () => 
//         <div>
//             <h1>Primeiro Component (Arrow)!</h1>
//         </div>

// export default function (){
//     return <h1>Primeiro Component</h1>
// }

// function primeiro(){
//     return <h1>Primeiro Component</h1>;
// }

// export default primeiro