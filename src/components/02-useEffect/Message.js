import React, {useEffect} from 'react';

export const Message = () => {

    useEffect(() => {
        console.log('hey')

        return () => {
            console.log('component hid')
        }
     }, []);

    return (
        <div>
            <h3>you are genials</h3>
        </div>
    )
}