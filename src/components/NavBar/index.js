import React from 'react';
import logo from '../../assets/logo.png';
import './styles.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navBar-container">

            <Link to='/'>
            <img
              className = "logo"
              alt='logo'
              src={logo}
            />
            </Link>
            <div
            className="navLinks">
                <Link to='/politics'>
            <h3 className="NavTopics">    POLITICS    </h3>
                </Link>
                <Link to='/business'>
            <h3 className="NavTopics">    BUSINESS    </h3>
                </Link>
                <Link to='/tech'>
            <h3 className="NavTopics">    TECH        </h3>
                </Link>
                <Link to='/science'>
            <h3 className="NavTopics">    SCIENCE     </h3>
                </Link>
                <Link to='/sports'>
            <h3 className="NavTopics">    SPORTS      </h3>
                </Link>
                <Link to='/login'>
            <h3 className="loginNav">    LOGIN       </h3>
                </Link>
            </div>
                
        </div>
    )
};
export default NavBar