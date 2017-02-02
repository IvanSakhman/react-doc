import React, { Component } from 'react';

class LogginButton extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    };

    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Loggin
            </button>
        );
    }
}

export default LogginButton;