import React from 'react';
import './FAQ.css'

const FAQ = () => {
    return (
        <div className='FAQ-container'>
            <h2 className='FAQ-heading'>1.Props VS State</h2>
            <p><b>Answer:-</b><br />
                State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component. Props, on the other hand,make components reusable by giving components the ability to receive data from the parent component in the form of props.
            </p>

            <h2 className='FAQ-heading'>2.How does useState work?</h2>
            <p><b>Answer:-</b><br />
                Every time your component renders, useState gives you an array containing two values: The state variable (counter) with the value you stored. The state setter function (setCounter) which can update the state variable and trigger React to render the component again
                </p>

            <h2 className='FAQ-heading'>3.Purpose of useEffect other than fetching data</h2>
            <p><b>Answer:-</b><br />
                Running on state change: validating input field <br />

                Running on state change: live filtering <br />

                Running on state change: trigger animation on new array value <br />

                Running on props change: update paragraph list on fetched API data update <br />

                Running on props change: updating fetched API data to get BTC updated price
                </p>
             <h2 className='FAQ-heading'>4.How does react work?</h2>
                <p><b>Answer:-</b><br />
                ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It's important to note that ReactJS is not a JavaScript framework.
                </p>

        </div>
    );
};

export default FAQ;