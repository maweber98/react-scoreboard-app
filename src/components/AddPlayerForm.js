import React from 'react';
import { Consumer } from './Context';

const AddPlayerForm = () => {

    const playerInput = React.createRef();

        return (
            <Consumer>
                { context => {
                   const handleSubmit = (e) => {
                    e.preventDefault();
                    context.actions.addPlayer(playerInput.current.value);
                    e.currentTarget.reset();
                }

        return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add players name"
                    ref={playerInput}
                    // onChange={handleValueChange}
                />
                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }}
    </Consumer>
    );
}

export default AddPlayerForm;
