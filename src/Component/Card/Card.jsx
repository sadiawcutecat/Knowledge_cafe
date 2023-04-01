import React from 'react';
import './Card.css'
import Blogs from '../Blogs/Blogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    const { img, blogTitle, authorName, authorImage, publishDate, readTime,id } = props.card;
    // const {handleTitle, handleBookmark, handleClick}= props;
    // const handleInfo = (i,t) =>{
    //     console.log(i,t);
    //     props.handleBookmark(i);
    //     props.handleTitle(t)
    // }
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
                    <div className='time-container'>
                    <p className='read-time'>{readTime} min read</p>
                    <button className='bookmark-icon' onClick={() =>{props.handleBookmark(id) 
                    props.handleTitle(blogTitle)}}
                    ><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
                <h2 className='blog-title'>{blogTitle}</h2>
                <button className='button' onClick={() => props.handleClick(readTime)}>Mark as read</button>

            </div>






        </div>
    );
};

export default Card