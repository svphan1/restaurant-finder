import React, { useRef } from 'react';
import classes from './SearchBar.module.css';
import FilterDropdown from './FilterDropdowns/FilterDropdown';
import Pagination from '../Pagination/Pagination';
import Button from '../UI/Button/Button';

const SearchBar = (props) => {
    const cityRef = useRef('');
    const restaurantRef = useRef('');

    const handleSearch = () => {
        const city = cityRef.current.value;
        const restaurant = restaurantRef.current.value;

        props.searchHandler(city, restaurant);
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
                <Button onClick={handleSearch}>Search</Button>
            </div>
            <FilterDropdown
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
