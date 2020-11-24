import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import axios from 'axios';

const instance = axios.create ({
    baseURL: "https://blog.cheesecakelabs.com/challenge/"
});


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
    <ul key={item.title} >
   {item.tags[0].label === 'Politics' ? <li>{item.title}</li> : null}  
    </ul>
  )}

        </div>
    )
}

export default Politcs