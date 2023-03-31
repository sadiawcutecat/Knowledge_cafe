import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props);

    return (
        <div>
          <img className='card-img' src={props.card.img} alt="" />
        
           
        </div>
    );
};

export default Card