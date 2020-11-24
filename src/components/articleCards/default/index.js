import React from 'react';


function DefaultCard({ title, author, className, content}){
    return(
        <div className={className}> 
            <h2>{title}</h2>
            <p className ='authorFeatured'> Created by {author}</p>
            <p>{content}</p>
        </div>
    )
}

export default DefaultCard