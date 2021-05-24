import React, {useState, useMemo} from 'react'
import { useCounter } from "../../hooks/useCounter";
import {procesoPesado} from '../../helpers/procesoPesado';
export const MemoHook = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);
    const memoProcesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook:  <small>{counter}</small></h1>

            <p>{memoProcesado}</p>
            <button className="btn btn-primary"
                    onClick={increment}  >
             +1  
            </button>

            <button className="btn btn-primary" onClick={ () => {
                setShow(!show)
            }}> Show/hide {JSON.stringify(show)}</button>
        </div>
    )
}
