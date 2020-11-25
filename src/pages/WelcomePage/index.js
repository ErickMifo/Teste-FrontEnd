import React, { useState, useEffect } from "react";
import './styles.css';
import queryString from 'query-string';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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



               <motion.h1 exit={{ opacity: 0}} transition={{duration: 0.2}} className="welcomeTitle">Welcome, <span style={{color: "#1167b1"}}>{name}</span>!</motion.h1>
            <div className="interestsContainer">
               <motion.p exit={{ opacity: 0}} transition={{duration: 0.2}} className="interestsTitle">MY INTERESTS</motion.p>

                <div className="interests">
                    <motion.h3
                    exit={{y: 300, opacity: 0}}
                    transition={{duration: 0.6}}
                    onClick={handleClickPolitics}
                    className={politics ? "politicsInterestsActive" : "politicsInterests"}>
                      POLITICS
                    </motion.h3>
                    <motion.h3
                    exit={{y:-300, opacity: 0}}
                    transition={{duration: 0.6}}
                    onClick={handleClickBusiness} 
                    className={business ? "businessInterestsActive" : "businessInterests"}>
                      BUSINESS
                    </motion.h3>
                    <motion.h3
                    exit={{y:300, opacity: 0}}
                    transition={{duration: 0.6}}
                    onClick={handleClickTech}
                    className={tech ? "techInterestsActive" : "techInterests"}>
                      TECH
                    </motion.h3>
                    <motion.h3
                     exit={{y:-300, opacity: 0}}
                     transition={{duration: 0.6}}
                    onClick={handleClickScience} 
                    className={science ? "scienceInterestsActive" : "scienceInterests"}>
                      SCIENCE
                    </motion.h3>
                    <motion.h3
                     exit={{y:300, opacity: 0}}
                     transition={{duration: 0.6}}
                    onClick={handleClickSports} 
                    className={sports ? "sportsInterestsActive" : "sportsInterests"}>
                      SPORTS
                    </motion.h3>
                </div>
            </div>


            <motion.div         
              className="welcomeButtons"
              exit={{ opacity: 0}}
              transition={{duration: 0.2}}>

            <button className="buttonSave"> SAVE </button>

            <Link to='/'>
            <button className="buttonBackHome"> BACK TO HOME </button>
            </Link>

            </motion.div>


       </div>
    </>
    )
}

export default WelcomePage