import React from 'react';
import './Card.css'
import Blogs from '../Blogs/Blogs';

const Card = (props) => {
    const { img, blogTitle, authorName, authorImage, publishDate, readTime } = props.card;
    
    return (
        <div className='card-details'>
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
                    <p className='read-time'>{readTime} min read</p>
                </div>
                <h2 className='blog-title'>{blogTitle}</h2>
                <button className='button' onClick={() => props.handleClick(readTime)}>Mark as read</button>

            </div>

           




        </div>
    );
};

export default Card