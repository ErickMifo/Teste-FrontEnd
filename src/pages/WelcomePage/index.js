import React, { useState, useEffect } from "react";
import './styles.css';
import queryString from 'query-string';
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'

function WelcomePage({ location }) {

    const [name, setName] = useState('');

    useEffect(() => {

        const { name } = queryString.parse(location.search);

        setName(name)
       
      }, [location.search]);
      
return (
    <>
        <NavBar />
        <div className="WelcomeContainer">
               <h1>welcome, <span style={{color: "#1167b1"}}>{name}</span></h1>
            <div>
               <p className="interestsTitle">MY INTERESTS</p>
                <div className="interests">
                    <h3 className="politicsInterests">POLITICS</h3>
                    <h3 className="businessInterests">BUSINESS</h3>
                    <h3 className="techInterests">TECH</h3>
                    <h3 className="scienceInterests">SCIENCE</h3>
                    <h3 className="sportsInterests">SPORTS</h3>
                </div>
            </div>
            <button className="buttonSave"> SAVE </button>
            <Link to='/'>
            <button className="buttonBackHome"> BACK TO HOME </button>
            </Link>
        </div>
    </>
    )
}

export default WelcomePage