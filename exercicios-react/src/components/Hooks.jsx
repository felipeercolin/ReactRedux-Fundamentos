import React, {useState, useEffect} from 'react';

export default props => {
    const [contador, setContador] = useState(100)
    const [parOuImpar, setParOuImpar] = useState('Par')
    
    useEffect(() =>{
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar');
    })
    ///let contador = 3;
    return (
        <div>
            <h1>{contador}</h1>
            <h3>{parOuImpar}</h3>
            <button onClick={() => setContador(contador-1)}>Decrementar</button>
            <button onClick={() => setContador(contador+1)}>Incrementar</button>
        </div>
    );
}