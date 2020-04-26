import React, { Fragment, useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import TableCard from '../components/TableCard/TableCard';
import Background from '../components/Background/Background';

const App = () => {
    const [restaurants, setData] = useState([]);
    const [city, setCity] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [restaurantsPerPage] = useState(10);

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
            console.log(
                filteredRestaurants,
                restaurants,
                selectedState,
                selectedGenre
            );
        }
    }, [filteredRestaurants, restaurants]);

    const filterRestaurantsByState = (value) => {
        let restaurantsToUse =
            (city || restaurant) && filteredRestaurants.length
                ? filteredRestaurants
                : restaurants;

        if (value && value !== selectedState) {
            restaurantsToUse = restaurants;
        } else if ((city || restaurant) && filteredRestaurants.length) {
            restaurantsToUse = filteredRestaurants;
        } else {
            restaurantsToUse = restaurants;
        }
        return restaurantsToUse.filter((result) => result.state === value);
    };

    const filterRestaurantsByGenre = (genre) => {
        let restaurantsToUse =
            (city || restaurant) && filteredRestaurants.length
                ? filteredRestaurants
                : restaurants;

        if (genre && genre !== selectedGenre) {
            restaurantsToUse = restaurants;
        } else if ((city || restaurant) && filteredRestaurants.length) {
            restaurantsToUse = filteredRestaurants;
        } else {
            restaurantsToUse = restaurants;
        }

        return restaurantsToUse.filter((result) =>
            result.genre.includes(genre)
        );
    };

    const selectedStateHandler = (e) => {
        const { value } = e.target;
        setSelectedState(value);
        setFilteredRestaurants(filterRestaurantsByState(value));
    };

    const selectedGenreHandler = (e) => {
        const { value } = e.target;
        setSelectedGenre(value);
        setFilteredRestaurants(filterRestaurantsByGenre(value));
    };

    const searchHandler = (city, restaurant) => {
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

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastRestaurant = currentPage * restaurantsPerPage;
    const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
    const currentRestaurants = restaurants.slice(
        indexOfFirstRestaurant,
        indexOfLastRestaurant
    );

    const wasFiltered = selectedState || selectedGenre;

    return (
        <Fragment>
            <Layout>
                <Background
                    searchHandler={searchHandler}
                    resetSearch={resetSearch}
                    selectedStateHandler={selectedStateHandler}
                    selectedGenreHandler={selectedGenreHandler}
                    restaurantsPerPage={restaurantsPerPage}
                    totalRestaurants={restaurants.length}
                    paginate={paginate}
                />
                {wasFiltered && filteredRestaurants.length < 1 ? (
                    <p
                        style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginTop: '5rem',
                            fontSize: '1.2rem',
                        }}
                    >
                        Welp, sorry no match was found for that state!
                    </p>
                ) : (
                    <TableCard
                        restaurants={
                            filteredRestaurants.length
                                ? filteredRestaurants
                                : currentRestaurants
                        }
                    />
                )}
            </Layout>
        </Fragment>
    );
};

export default App;
