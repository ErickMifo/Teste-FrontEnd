import React from 'react';


function DefaultCard({ title, author, className, content, style, topic}){
    return(
        <div className={className}> 
            <p style={style}>{topic}</p>
            <h2>{title}</h2>
            <p className ='authorFeatured'> Created by {author}</p>
            <p>{content}</p>
        </div>
    )
}

export default DefaultCard