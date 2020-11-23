import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import axios from 'axios';

const instance = axios.create ({
    baseURL: "https://blog.cheesecakelabs.com/challenge/"
});


function Sports() {

    
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
    <ul key={item.tags[0].id} >
   {item.tags[0].label === 'Sports' ? <li>{item.title}</li> : null}  
    </ul>
  )}

        </div>
    )
}

export default Sports