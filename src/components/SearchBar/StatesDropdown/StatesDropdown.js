import React, { useState, useEffect } from 'react';
import states from './states.json';
import genres from './genres.json';
import classes from './StatesDropdown.module.css';

const StatesDropdown = () => {
    const [data, setData] = useState({ states, genres });

    useEffect(() => {
        console.log(genres);
    }, []);

    return (
        <div className={classes.StatesDropdown}>
            <p>
                <strong>Filter by:</strong>
            </p>
            <p>States</p>
            <select name="states">
                {data.states.map((states) => (
                    <option key={states.code} value={states.code}>
                        {states.name}
                    </option>
                ))}
            </select>
            <p>Genre</p>
            <select name="genres">
                {data.genres.map((genres) => (
                    <option key={genres.id} value={genres.name}>
                        {genres.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StatesDropdown;
