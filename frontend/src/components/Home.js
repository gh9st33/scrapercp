import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Scraper Control Panel</h1>
                <p>This tool allows you to code, run and visualize the result of scraper operations.</p>
                <p>Start by writing your scraper code, then control the execution and finally view the results.</p>
                <div>
                    <Link to="/scraper-coding">Go to Scraper Coding</Link>
                    <Link to="/control">Go to Control</Link>
                    <Link to="/result-display">Go to Result Display</Link>
                </div>
            </div>
        );
    }
}

export default Home;