import React, { Component } from 'react';
import Beaches from '../images/Beaches.jpg';
import Parks from '../images/Parks.jpg';
import Concerts from '../images/Concerts.jpeg';
import AllEvents from '../images/allEvents.jpg';
import Clubs from '../images/Clubs.jpg';
import DiveBar from '../images/Dive-bar.jpg';

class Cards extends Component {

    onHover = () => {
        
    };

    render() {
        const beaches = {
            display: 'inline-block',
            color: 'white',
            backgroundImage: `url(${Beaches})`,
            backgroundSize: 'cover',
            margin: '30px',
            border: '1px solid blue',
            padding: '10px',
            width: '25%',
            height: '200px',
            boxShadow: '5px 10px lightgrey',
        };

        const parks = {
            display: 'inline-block',
            color: 'white',
            backgroundImage: `url(${Parks})`,
            backgroundSize: 'cover',
            margin: '30px',
            border: '1px solid blue',
            padding: '10px',
            width: '25%',
            height: '200px',
            boxShadow: '5px 10px lightgrey',
        };

        const concerts = {
            display: 'inline-block',
            color: 'white',
            backgroundImage: `url(${Concerts})`,
            backgroundSize: 'cover',
            margin: '30px',
            border: '1px solid blue',
            padding: '10px',
            width: '25%',
            height: '200px',
            boxShadow: '5px 10px lightgrey',
        };

        const clubs = {
            display: 'inline-block',
            color: 'white',
            backgroundImage: `url(${Clubs})`,
            backgroundSize: 'cover',
            margin: '30px',
            border: '1px solid blue',
            padding: '10px',
            width: '25%',
            height: '200px',
            boxShadow: '5px 10px lightgrey',
        };

        const diveBar = {
            display: 'inline-block',
            color: 'white',
            backgroundImage: `url(${DiveBar})`,
            backgroundSize: 'cover',
            margin: '30px',
            border: '1px solid blue',
            padding: '10px',
            width: '25%',
            height: '200px',
            boxShadow: '5px 10px lightgrey',
        };

        const allEvents = {
            display: 'inline-block',
            color: 'white',
            backgroundImage: `url(${AllEvents})`,
            backgroundSize: 'cover',
            margin: '30px',
            border: '1px solid blue',
            padding: '10px',
            width: '25%',
            height: '200px',
            boxShadow: '5px 10px lightgrey',
        };

        return (
            <div className="container">
            <div>
                <h1 style={allEvents}>All Events</h1>
                <h1 style={beaches} onMouseOver={this.onHover}>Beaches</h1>
                <h1 style={parks}>Parks</h1>
            </div>
            <div>
                <h1 style={concerts}>Concerts</h1>
                <h1 style={clubs}>Clubs</h1>
                <h1 style={diveBar}>Dive-bars</h1>
            </div>
            </div>
        );
    }
}

export default Cards;