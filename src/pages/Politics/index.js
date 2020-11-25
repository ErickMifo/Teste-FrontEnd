import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import instance from '../../fetch/axios';
import '../../styles/topicsStyles.css';
import { motion } from 'framer-motion';



function Politcs() {

    
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const request = await instance.get('')
            setData(request.data)
        }
        getData()
      }, [])


    return (
        <div>
            
            <NavBar />   

{data.map((item) => 
    <motion.div
    exit={{opacity: 0}}
    transition={{duration: 0.4}}
    className='topicsList' key={item.title} >
   {item.tags[0].label === 'Politics' ?
        <div>
    <img className="imageTopics" src={item.image_url} alt='politics' />
    <h1>{item.title}</h1> 
    <p>{item.content}</p>
    <p>@ {item.website}</p>
    <p>{item.date}</p>
    <p>{item.authors}</p>
        </div>
   : null}  
    </motion.div>
  )}

        </div>
    )
}

export default Politcs