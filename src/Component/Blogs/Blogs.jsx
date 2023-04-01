import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Blogs.css'

const Blogs = (props) => {
    const [cards, setCards] = useState([]);
    const [count, setCount] = useState(0);
    const [bookmarkCount, setBookmarkCount] = useState(0);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setCards(data))

    }, [])


    const handleClick = (time) => {
        const newCount = count + time;
        setCount(newCount);
    }
    const handleBookmark = (id) => {
        setBookmarkCount(id)
    }
    const handleTitle = (blogTitle) => {
        console.log(blogTitle);
        const newTitleArray = [...title, blogTitle];
        setTitle(newTitleArray);
        console.log(newTitleArray);

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
                    <p>Bookmarked Blogs:{title.length} </p>


                    <div>
                        {
                            title.map(e => {
                                <div>
                                    <div>
                                    <p className='bookmark-title'>{e}</p>
                                    </div>
                                    
                                    {/* <div>
                                        <br />
                                    </div> */}
                                </div>

                            })
                        }
                        <h4>Title: {title}</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;