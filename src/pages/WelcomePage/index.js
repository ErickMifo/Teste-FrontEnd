import React, { useState, useEffect } from "react";
import './styles.css';
import queryString from 'query-string';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';

function WelcomePage({ location }) {

    const [name, setName] = useState('');
    const [politics, setPolitics] = useState(false);
    const [business, setBusiness] = useState(false);
    const [tech, setTech] = useState(false);
    const [science, setScience] = useState(false);
    const [sports, setSports] = useState(false);


    useEffect(() => {

        const { name } = queryString.parse(location.search);

        setName(name)
       
      }, [location.search]);

      const handleClickPolitics = (e) => {
        console.log(e.target.className)
        setPolitics(!politics)
      }
      const handleClickBusiness = (e) => {
        console.log(e.target.className)
        setBusiness(!business)
      }
      const handleClickTech = (e) => {
        console.log(e.target.className)
        setTech(!tech)
      }
      const handleClickScience = (e) => {
        console.log(e.target.className)
        setScience(!science)
      }
      const handleClickSports = (e) => {
        console.log(e.target.className)
        setSports(!sports)
      }
      
return (
    <>
        <NavBar />
        <div className="WelcomeContainer">
               <h1>Welcome, <span style={{color: "#1167b1"}}>{name}</span>!</h1>
            <div className="interestsContainer">
               <p className="interestsTitle">MY INTERESTS</p>
                <div className="interests">
                    <h3 onClick={handleClickPolitics} className={politics ? "politicsInterestsActive" : "politicsInterests"}>POLITICS</h3>
                    <h3 onClick={handleClickBusiness} className={business ? "businessInterestsActive" : "businessInterests"}>BUSINESS</h3>
                    <h3 onClick={handleClickTech} className={tech ? "techInterestsActive" : "techInterests"}>TECH</h3>
                    <h3 onClick={handleClickScience} className={science ? "scienceInterestsActive" : "scienceInterests"}>SCIENCE</h3>
                    <h3 onClick={handleClickSports} className={sports ? "sportsInterestsActive" : "sportsInterests"}>SPORTS</h3>
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