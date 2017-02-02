import React, { Component } from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            posts: [],
            comments: []
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>React App</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <Welcome name="Ivan"/>
            </div>
        );
    }
}

export default Clock;