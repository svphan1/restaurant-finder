import React, { useState, useEffect } from 'react';
import states from './states.json';
import genres from './genres.json';
import classes from './StatesDropdown.module.css';

const StatesDropdown = (props) => {
    const statesList = states;
    const genresList = genres;

    return (
        <div className={classes.StatesDropdown}>
            <p>
                <strong>Filter by:</strong>
            </p>
            <p>States</p>
            <select name="states" onChange={props.selectedStateHandler}>
                <option value=""></option>
                {statesList.map((states) => (
                    <option key={states.code} value={states.code}>
                        {states.name}
                    </option>
                ))}
            </select>
            <p>Genre</p>
            <select name="genres" onChange={props.selectedGenreHandler}>
                <option value=""></option>
                {genresList.map((genres) => (
                    <option key={genres.id} value={genres.name}>
                        {genres.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StatesDropdown;
