import React, {useState} from 'react';
import './counter.css';



// TAREA DE HACER UN CONTADOR DE UN SOLO VALOR Y MANTENER EL RESTO DE VALORES ESTATICOS
export const CounterApp = () => {

    const [state, setState] = useState({ counter1: 10, counter2: 20, counter3: 30})

    const { counter1, counter2 } = state;
    return (
        <>
        <h1>Counter {counter1}</h1>
        <h1>Counter {counter2}</h1>
        <hr>
        </hr>

        <button className="btn btn-primary"
        onClick={ () => {
            setState( { 
                ...state,
                counter1: counter1 + 1})
        }}>+1</button>
        </>
    )


}