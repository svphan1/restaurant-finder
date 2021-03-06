import React from 'react';
import background from '../../assets/images/background.jpg';
import SearchBar from '../SearchBar/SearchBar';
import classes from './SearchLayout.module.css';

const Background = (props) => (
    <div className={classes.Background}>
        <SearchBar
            searchHandler={props.searchHandler}
            resetSearch={props.resetSearch}
            selectedStateHandler={props.selectedStateHandler}
            selectedGenreHandler={props.selectedGenreHandler}
            restaurantsPerPage={props.restaurantsPerPage}
            totalRestaurants={props.totalRestaurants}
            paginate={props.paginate}
        />
        <img src={background} alt="food background" />
    </div>
);

export default Background;
