import React, { Component } from 'react';

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('THe link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    )
}

export default ActionLink;