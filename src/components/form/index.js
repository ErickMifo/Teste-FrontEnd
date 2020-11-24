import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css'


function Form() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('')

  return (

<form>

        <div className="FormInputs">
          <h2>USERNAME</h2>
          <input 
          type="text"
          onChange={(event) => setName(event.target.value)} />

          <h2>PASSWORD</h2>
          <input 
          type="text"
          onChange={(event) => setPassword(event.target.value)} />

        </div>

        <Link to={`/welcome?name=${name}`}>
          <button 
          className="formButton"
          disabled = {name === '' || password === '' ?  true : false }
          type="submit">
            Login
          </button>
        </Link>
</form>   
  );

}

export default Form