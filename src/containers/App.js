import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout/Layout';
import TableCard from '../components/TableCard/TableCard';
import Background from '../components/UI/Background/Background';
import './App.css';

const App = () => {
    const [restaurants, setData] = useState([]);
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
        return restaurants.filter((result) => result.state === state);
    };

    const filterRestaurantsByGenre = (genre) => {
        return restaurants.filter((result) => result.genre.includes(genre));
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

    const wasFiltered = selectedState || selectedGenre;

    return (
        <div>
            <Layout>
                <Background
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
