import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import instance from '../../fetch/axios';
import '../../styles/topicsStyles.css';



function Science() {

    
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
    <div className='topicsList' key={item.title} >
   {item.tags[0].label === 'Science' ?
        <div>
    <img className="imageTopics" src={item.image_url} alt='science' />
    <h1>{item.title}</h1> 
    <p>{item.content}</p>
    <p>@ {item.website}</p>
    <p>{item.date}</p>
    <p>{item.authors}</p>
        </div>
   : null}  
    </div>
  )}

        </div>
    )
}

export default Science