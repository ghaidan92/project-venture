import React, { Component } from 'react';

class PopUp extends Component {

    render() {
        console.log("worked");
        const popUp = {
            display: 'inline-block',
            color: 'white',
            backgroundSize: 'cover',
            backgroundColor: 'red',
            margin: '30px',
            border: '1px solid blue',
            padding: '10px',
            width: '50%',
            height: '400px',
            boxShadow: '5px 10px lightgrey',
            "z-index": '1',
        };
        return (
            <div>
                <div style={popUp}>something</div>
            </div>
        )
    }
}

export default PopUp;