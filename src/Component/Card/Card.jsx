import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props);
    const { img, blogTitle, authorName, authorImage, publishDate, readTime } = props.card;

    return (
        <div className='card=container'>
            <img className='card-img' src={img} alt="" />
           


        </div>
    );
};

export default Card