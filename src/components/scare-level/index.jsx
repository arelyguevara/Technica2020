import React from 'react';
import './index.css';
import { BrowserRouter as Switch, Link } from 'react-router-dom';
//this was in browserRouter, leaving it here incase it may be needed in the future: 'Router, Route, Switch, Link'

class scare extends React.Component {
    render() {
        return (
            <div className="main">
            {/* main title of the home page */}
            <h1 style={{color: "red"}} id="title">Pick Your Scare Level</h1> 

 

            {/* linked to the reviews component using routes */}
            {/* <Link id="reviews" to='/reviews'>View Reviews!</Link> */}
            </div>
        );
    };
};

export default scare