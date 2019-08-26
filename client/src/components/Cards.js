import React, { Component } from 'react';

class Cards extends Component {
    render() {
        const style = {
            display: 'inline-block',
            backgroundColor: 'grey',
            margin: '20px',
            border: '1px solid blue',
            padding: '10px',
            width: '25%',
            // height: '100%',
            boxShadow: '5px 10px lightgrey',
        };

        return (
            <div className="container">
            <div>
                <h1 style={style}>Hello</h1>
                <h1 style={style}>Hello2</h1>
                <h1 style={style}>Hello3</h1>
            </div>
            </div>
        );
    }
}

export default Cards;