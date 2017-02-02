import React, { Component } from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        if (this.state.value) {
            alert('A name was submitted: ' + this.state.value);
        } else {
            alert('A name was submitted: Anonymous');
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ladel>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </ladel>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NameForm;