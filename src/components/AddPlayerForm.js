import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
    static propTypes = {
        addPlayer: PropTypes.func
    };

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { addPlayer } = this.props;

        if(this.state.value) {
            addPlayer(this.state.value);
        };

        this.setState({ value: '' });
    }

    render() {
        // console.log(this.state.value);
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add players name"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                />
                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        )
    }
}

export default AddPlayerForm;
