import React from 'react';
import './styles.css';

function Featured({ src, alt, title, author, className, topic, style}){
    return(
        
        <div className={className}> 
            <p style={style}>{topic}</p>
            <img className='imgFeatured' src={src} alt={alt} />
            <h2>{title}</h2>
            <p className ='authorFeatured'> Created by {author}</p>
        </div>
    )
}

export default Featured