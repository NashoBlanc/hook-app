import React, {useEffect} from 'react';
import './effects.css';
import {useForm} from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [formValues, hadleInputChange] =  useForm({ 
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email cambio');
    }, [email]);

    const hadleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <>
        <form onSubmit={hadleSubmit}>
        <h1>FormWithCustomHook</h1>
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


        <div className="form-group">
            <input 
            type="password" 
            name="password" 
            className="form-control" 
            placeholder="***" 
            value={password}
            onChange={hadleInputChange}>
            </input>
        </div>
        <hr></hr>
        <button type="submit" className="btn btn-primary">Save</button>

        </form>
        </>
    )
}