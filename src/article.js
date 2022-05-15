import React from 'react';
const Article = ({title,content,image}) => {
    return (
        <div className='Article'>
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <p>{content }</p>
        </div>
    )
} 
export default Article;