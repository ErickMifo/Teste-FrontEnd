import React from 'react';
import './styles.css';

function HeadLine({ src, alt, title, author, className, content, topic, style}){
    return(
        <div className={className}> 
            <p style={style}>{topic}</p>
            <img className='imgHeadLine' src={src} alt={alt} />
            <h2>{title}</h2>
            <p> Created by {author}</p>
            <p>{content}</p>
        </div>
    )
}

export default HeadLine