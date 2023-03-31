import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props);
    const { img, blogTitle, authorName, authorImage, publishDate, readTime } = props.card;

    return (
        <div className='card=container'>
            <img className='card-img' src={img} alt="" />
            <div className='card-info' >
            <div className='card-subInfo'>
                <img className='author-img' src={authorImage} alt="" />
                <div>
                    <h3 className='author-name'>{authorName}</h3>
                    <p className='publish-date' >{publishDate}</p>
                </div>
            </div>
           
            </div>



        </div>
    );
};

export default Card