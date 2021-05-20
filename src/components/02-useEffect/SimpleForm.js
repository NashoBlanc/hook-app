import React, {useEffect, useState} from 'react';
import './effects.css';
import {Message} from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] =  useState({ 
        name: '',
        email: ''
    });

    const {name, email} = formState;

    
    useEffect(() => {
        console.log('hey')
    }, [formState]);

    useEffect(() => {
        console.log('email cambio')
    }, [email]);

    const hadleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
        <h1>Simple Form</h1>
        <div className="form-group">
            <input 
            type="text" 
            name="name" 
            className="form-control" 
            placeholder="Nombre" 
            autoComplete="off"
            value={name}
            onChange={hadleInputChange}>
            </input>
        </div>


        <div className="form-group">
            <input 
            type="text" 
            name="email" 
            className="form-control" 
            placeholder="Email@gmail.com" 
            autoComplete="off"
            value={email}
            onChange={hadleInputChange}>
            </input>
        </div>
        <hr></hr>

        {(name === '123') && <Message />}
        </>
    )
}