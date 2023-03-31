import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Blogs.css'

const Blogs = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
     fetch('Blogs.json')
     .then(res => res.json())
     .then(data => setCards(data))

    }, [])
    return (
        <div className='blogs-container'>
            <div className="blogCart-container">
            {
                cards.map(card => <Card
                key={card.id}
                card ={card}
                ></Card> )
            }
            </div>
            <div className="sideBlog-container">
                <div className='time-spent-blog'>
             <p>Spent time on read: </p>
                </div>
                <div className='bookmark-blog'>
                <p>Bookmarked Blogs: </p>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;