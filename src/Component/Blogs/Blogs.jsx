import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Blogs.css'

const Blogs = (props) => {
    const [cards, setCards] = useState([]);
    const [count, setCount] = useState(0);
    const [bookmarkCount , setBookmarkCount] = useState(0);
    const [blogTitle, setBlogTitle] = useState([]);
   
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setCards(data))

    }, [])
    

    const handleClick = (time) =>{
        const newCount = count + time ;
        setCount(newCount);
    }
    const handleBookmark = (time) =>{
        setBookmarkCount(time)
    }
    const handleTitle = (blogTitle) => {
        setBlogTitle(blogTitle);
     
        
    }
    return (
        <div className='blogs-container'>
            <div className="blogCart-container">
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                        handleClick={handleClick}
                        handleBookmark={handleBookmark}
                        handleTitle={handleTitle}
                    ></Card>)
                }
            </div>
            <div className="sideBlog-container">
                <div className='time-spent-blog'>
                    <p>Spent time on read:{count} min </p>
                </div>
                <div className='bookmark-blog'>
                    <p>Bookmarked Blogs:{bookmarkCount} </p>
                </div>
                <div>
                    <h4>Title: {blogTitle}</h4>
                </div>
            </div>

        </div>
    );
};

export default Blogs;