import React from 'react';
import './index.css';
import { BrowserRouter as Switch, Link } from 'react-router-dom';
//this was in browserRouter, leaving it here incase it may be needed in the future: 'Router, Route, Switch, Link'

class Home extends React.Component {
    render() {
        return (
            <div className="main">
            {/* main title of the home page */}

                <div className="hero-image">
                    <div className={"hero-text"}>
                        <h1 id="title">Welcome to Halloween Party</h1> 
                    </div>
                </div>

 

         
            </div>
        );
    };
};

export default Home 