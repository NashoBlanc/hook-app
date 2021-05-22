import React, {useRef, useLayoutEffect, useState} from 'react';
import '../05-useLayoutEffect/layout.css';
import {useFetch} from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';
export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // el !! es por el caso que data es null, si pones !data sera true, y si pones !!data sera falso
    // todo esto es porque el valor puede ser null.
    const {quote} = !!data && data[0];

    const  pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])



    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
                <blockquote className="blockquote text-right">
                <p className="mb-0" ref={pTag}> {quote}</p>
                </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>    
            <button className="btn btn-primary" 
            onClick={increment}> Next quote</button>
        </div>
    )
}