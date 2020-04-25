import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout/Layout';
import TableCard from '../components/TableCard/TableCard';
import Background from '../components/UI/Background/Background';
import './App.css';

const App = () => {
    const [restaurants, setData] = useState([]);
    const [city, setCity] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    async function getRestaurants() {
        await fetch(
            'https://code-challenge.spectrumtoolbox.com/api/restaurants',
            {
                headers: {
                    Authorization: 'Api-Key q3MNxtfep8Gt',
                },
            }
        )
            .then((res) => res.json())
            .then(setData);
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    useEffect(() => {
        if (
            restaurants.length ||
            selectedState.length ||
            selectedGenre.length
        ) {
            console.log(restaurants, selectedState, selectedGenre);
        }
    }, [filteredRestaurants, restaurants]);

    const filterRestaurantsByState = (state) => {
        let restaurantsToUse =
            (city || restaurant) && filteredRestaurants.length
                ? filteredRestaurants
                : restaurants;
        return restaurantsToUse.filter((result) => result.state === state);
    };

    const filterRestaurantsByGenre = (genre) => {
        const restaurantsToUse =
            (city || restaurant) && filteredRestaurants.length
                ? filteredRestaurants
                : restaurants;
        return restaurantsToUse.filter((result) =>
            result.genre.includes(genre)
        );
    };

    const selectedStateHandler = (e) => {
        const { value } = e.target;
        setSelectedState(value);
        const filtered = filterRestaurantsByState(value);
        setFilteredRestaurants(filtered);
    };

    const selectedGenreHandler = (e) => {
        const { value } = e.target;
        setSelectedGenre(value);
        setFilteredRestaurants(filterRestaurantsByGenre(value));
    };

    const handleSearch = (city, restaurant) => {
        if (!city && !restaurant) {
            return;
        }

        setCity(city);
        setRestaurant(restaurant);

        const searchedRestaurants = restaurants.filter((r) => {
            if (city && restaurant) {
                console.log('both section');
                return (
                    r.city.toLowerCase() === city.toLowerCase() ||
                    r.name.toLowerCase() === restaurant.toLowerCase()
                );
            } else if (city && !restaurant) {
                console.log('city section');
                return r.city.toLowerCase() === city.toLowerCase();
            }
            console.log('res section');
            return r.name.toLowerCase() === restaurant.toLowerCase();
        });

        setFilteredRestaurants(searchedRestaurants);
    };

    const resetSearch = () => {
        setFilteredRestaurants([]);
    };

    const wasFiltered = selectedState || selectedGenre;

    return (
        <div>
            <Layout>
                <Background
                    handleSearch={handleSearch}
                    resetSearch={resetSearch}
                    selectedStateHandler={selectedStateHandler}
                    selectedGenreHandler={selectedGenreHandler}
                />
                {wasFiltered && filteredRestaurants.length < 1 ? (
                    <p>No restaurants were found for the state</p>
                ) : (
                    <TableCard
                        restaurants={
                            filteredRestaurants.length
                                ? filteredRestaurants
                                : restaurants
                        }
                    />
                )}
            </Layout>
        </div>
    );
};

export default App;