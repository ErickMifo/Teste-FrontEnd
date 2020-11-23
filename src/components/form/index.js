import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css'


function Form() {

  const [name, setName] = useState('');

  return (

<form>

        <div className="FormInputs">
          <h2>USERNAME</h2>
          <input type="text" onChange={(event) => setName(event.target.value)} />

            <h2>PASSWORD</h2>
            <input type="text" />

        </div>

        <Link to={`/welcome?name=${name}`}>
          <button className="formButton" type="submit">Login</button>
        </Link>
</form>   
  );

}

export default Form