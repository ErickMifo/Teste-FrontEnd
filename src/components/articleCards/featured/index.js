import React from 'react';
import './styles.css';

function Featured({ src, alt, title, author, className}){
    return(
        <div className={className}> 
            <img className='imgFeatured' src={src} alt={alt} />
            <h2>{title}</h2>
            <p className ='authorFeatured'> Created by {author}</p>
        </div>
    )
}

export default Featured