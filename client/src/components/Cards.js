import React, { Component } from 'react';
import Beaches from '../images/Beaches.jpg';
import Parks from '../images/Parks.jpg';
import Concerts from '../images/Concerts.jpeg';

class Cards extends Component {
    render() {
        const beaches = {
            display: 'inline-block',
            backgroundColor: 'grey',
            backgroundImage: `url(${Beaches})`,
            backgroundSize: 'cover',
            margin: '29px',
            border: '1px solid blue',
            padding: '10px',
            width: '25%',
            height: '200px',
            boxShadow: '5px 10px lightgrey',
        };

        const parks = {
            display: 'inline-block',
            backgroundColor: 'grey',
            backgroundImage: `url(${Parks})`,
            backgroundSize: 'cover',
            margin: '29px',
            border: '1px solid blue',
            padding: '10px',
            width: '25%',
            height: '200px',
            boxShadow: '5px 10px lightgrey',
        };

        const concerts = {
            display: 'inline-block',
            backgroundColor: 'grey',
            color: 'white',
            backgroundImage: `url(${Concerts})`,
            backgroundSize: 'cover',
            margin: '29px',
            border: '1px solid blue',
            padding: '10px',
            width: '25%',
            height: '200px',
            boxShadow: '5px 10px lightgrey',
        };

        return (
            <div className="container">
            <div>
                <h1 style={beaches}>Beaches</h1>
                <h1 style={parks}>Parks</h1>
                <h1 style={concerts}>Concerts</h1>
            </div>
            </div>
        );
    }
}

export default Cards;