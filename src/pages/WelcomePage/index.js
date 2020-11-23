import React, { useState, useEffect } from "react";
import './styles.css';
import queryString from 'query-string';

function WelcomePage({ location }) {
    const [name, setName] = useState('');

    useEffect(() => {

        const { name } = queryString.parse(location.search);

        setName(name)
       
      }, [location.search]);
      
return (
        <div className="WelcomeContainer">
           <h1>welcome, {name}</h1> 
        </div>
    )
}

export default WelcomePage