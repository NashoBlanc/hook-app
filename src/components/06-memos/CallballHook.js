import React, { useState, useCallback, useEffect } from 'react'
import {ShowIncrement} from './ShowIncrement';

export const CallballHook = () => {

    const [counter, setCounter] = useState(10);

    // esto hace que no se vuelva a renderizar toda la app, cuando enviamos una funcion y este modifica
    // el state del componente padre (osea este) 

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter])

    useEffect(() => {
        // ???
    }, [increment])

    return (
        <div>
            <h1>Callback</h1>
            <ShowIncrement increment={increment}/>
            <p>{counter}</p>
        </div>
    )
}
