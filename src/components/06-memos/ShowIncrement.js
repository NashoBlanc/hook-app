import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    // deberia mostrarse solo una vez    
    console.log('me volvi a llamar');
    return (
        <button className="btn btn-primary"
        onClick={() => {increment(5);}}>
            incrementar
        </button>
    )
})
