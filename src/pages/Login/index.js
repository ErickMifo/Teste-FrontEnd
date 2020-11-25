import React from 'react';
import Form from '../../components/form';
import NavBar from '../../components/NavBar';
import './styles.css'
import { motion } from 'framer-motion';

function Login(){
    return(
        <>
        <NavBar />
        <motion.div
        exit={{opacity: 0}}
        transition={{duration: 0.6}}
        className="loginContainer">
            <h1>User Area</h1>
            <Form />
        </motion.div>
        </>
    )
}

export default Login