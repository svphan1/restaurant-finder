import React, { useState, useRef } from 'react';
import classes from './SearchBar.module.css';
import StatesDropdown from './FilterDropdowns/StatesDropdown';
import Pagination from '../Pagination/Pagination';
import Button from '../UI/Button/Button';

const SearchBar = (props) => {
    const cityRef = useRef('');
    const restaurantRef = useRef('');

    const handleClick = () => {
        const city = cityRef.current.value;
        const restaurant = restaurantRef.current.value;

        props.handleSearch(city, restaurant);
    };

    const handleChange = (event) => {
        if (!event.target.value) {
            props.resetSearch();
        }
    };

    return (
        <div className={classes.SearchBar}>
            <div className={classes.SearchContainer}>
                <input
                    type="text"
                    placeholder="Enter restaurant name..."
                    ref={restaurantRef}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="Enter city name..."
                    ref={cityRef}
                    onChange={handleChange}
                ></input>
                <Button onClick={handleClick}>Search</Button>
            </div>
            <StatesDropdown
                selectedStateHandler={props.selectedStateHandler}
                selectedGenreHandler={props.selectedGenreHandler}
            />
            <hr />
            <Pagination
                restaurantsPerPage={props.restaurantsPerPage}
                totalRestaurants={props.totalRestaurants}
                paginate={props.paginate}
            />
        </div>
    );
};

export default SearchBar;
