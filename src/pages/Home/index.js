import NavBar from '../../components/NavBar';
import './styles.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const instance = axios.create ({
    baseURL: "https://blog.cheesecakelabs.com/challenge/"
});

function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const request = await instance.get('')
            setData(request.data)
        }
        getData()
      }, [])

  return (
    <div className="App">
      <NavBar />   

      {data.map((item) => 
          <ul key={item.title} >
            <li >{item.title}</li>
          </ul>
        )}
      
    </div>
  );
}

export default Home;
