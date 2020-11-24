import React from 'react';
import './styles.css';

function HeadLine({ src, alt, title, author, className, content}){
    return(
        <div className={className}> 
            <img className='imgHeadLine' src={src} alt={alt} />
            <h2>{title}</h2>
            <p> Created by {author}</p>
            <p>{content}</p>
        </div>
    )
}

export default HeadLine