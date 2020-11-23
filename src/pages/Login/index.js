import React from 'react';
import Form from '../../components/form';
import NavBar from '../../components/NavBar';
import './styles.css'

function Login(){
    return(
        <>
        <NavBar />
        <div className="loginContainer">
            <h1>User Area</h1>
            <Form />
        </div>
        </>
    )
}

export default Login