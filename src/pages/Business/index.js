import React from 'react';
import NavBar from '../../components/NavBar';
import '../../styles/topicsStyles.css';
import { motion } from 'framer-motion';


function Business() {




    return (
        <>
        <NavBar />  
        <motion.div
        exit={{ opacity: 0 }}
        transition={{duration: 0.4}}  >
            
            

            <h1 className='topicsList'>There is still no articles with the topic "Business"</h1> 

        </motion.div>
        </>
    )
}

export default Business