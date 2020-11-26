import React from 'react';
import NavBar from '../../components/NavBar';
import { motion } from 'framer-motion';
import './styles.css';


function Page404(){
    return(
        <>
        <NavBar />
        <motion.div
        exit={{opacity: 0}}
        transition={{duration: 0.6}}
        className="container404">
            <h1> 404</h1>
            <h1> Oops </h1>
            <h3>The page you're looking for was not found</h3>
        </motion.div>
        </>
    )
}

export default Page404