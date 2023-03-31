import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Blogs.css'

const Blogs = (props) => {
    const [cards, setCards] = useState([]);
    const [count, setCount] = useState(0);
   
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setCards(data))

    }, [])
    

    const handleClick = (time) =>{
        console.log(time);
        const newCount = count + time ;
        setCount(newCount);
    }
    return (
        <div className='blogs-container'>
            <div className="blogCart-container">
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                        handleClick={handleClick}
                    ></Card>)
                }
            </div>
            <div className="sideBlog-container">
                <div className='time-spent-blog'>
                    <p>Spent time on read:{count} </p>
                </div>
                <div className='bookmark-blog'>
                    <p>Bookmarked Blogs: </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;