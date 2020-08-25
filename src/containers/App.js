import React, { Fragment, useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import TableCard from '../components/TableCard/TableCard';
import SearchLayout from '../components/SearchLayout/SearchLayout';
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://restaurantsapp.com/api/restaurants`

const App = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [restaurantsPerPage] = useState(10);

    async function getRestaurants() {
        setLoading(true);
        const data = await fetch(API_URL,
            {
                headers: {
                    Authorization: `${API_KEY}`,
                },
            })
            .then((res) => res.json())
        setRestaurants(data);
        setLoading(false);
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    const filterRestaurantsByState = (state) => {
        let restaurantsToUse;

        if (state && state !== selectedState) {
            restaurantsToUse = restaurants;
        } else if (
            (city || restaurant || selectedGenre) &&
            filteredRestaurants.length
        ) {
            restaurantsToUse = filteredRestaurants;
        } else {
            restaurantsToUse = restaurants;
        }
        return restaurantsToUse.filter((result) => result.state === state);
    };

    const filterRestaurantsByGenre = (genre) => {
        let restaurantsToUse;

        if (genre && genre !== selectedGenre) {
            restaurantsToUse = restaurants;
        } else if (
            (city || restaurant || selectedState) &&
            filteredRestaurants.length
        ) {
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
        if (!value) {
            resetSearch();
        }
    };

    const selectedGenreHandler = (e) => {
        const { value } = e.target;
        setSelectedGenre(value);
        setFilteredRestaurants(filterRestaurantsByGenre(value));
        if (!value) {
            resetSearch();
        }
    };

    const searchHandler = (city, restaurant) => {
        if (!city && !restaurant) {
            return;
        }

        setCity(city);
        setRestaurant(restaurant);

        let restaurantsToUse;

        if ((selectedGenre || selectedState) && filteredRestaurants.length) {
            restaurantsToUse = filteredRestaurants;
        } else {
            restaurantsToUse = restaurants;
        }

        const searchedRestaurants = restaurantsToUse.filter((r) => {
            if (city && restaurant) {
                return (
                    r.city.toLowerCase() === city.toLowerCase() ||
                    r.name.toLowerCase() === restaurant.toLowerCase()
                );
            } else if (city && !restaurant) {
                return r.city.toLowerCase() === city.toLowerCase();
            }
            return r.name.toLowerCase() === restaurant.toLowerCase();
        });

        setFilteredRestaurants(searchedRestaurants);
    };

    const resetSearch = () => {
        if (selectedState || selectedGenre) {
            return;
        } else {
            setFilteredRestaurants([]);
        }
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastRestaurant = currentPage * restaurantsPerPage;
    const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
    const currentFilteredRestaurants = filteredRestaurants.slice(
        indexOfFirstRestaurant,
        indexOfLastRestaurant
    );
    const currentRestaurants = restaurants.slice(
        indexOfFirstRestaurant,
        indexOfLastRestaurant
    );

    const wasFiltered = selectedState || selectedGenre;

    return (
        <Fragment>
            <Layout>
                <SearchLayout
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
                        Welp, sorry! No match was found for that state!
                    </p>
                ) : (
                        <TableCard
                            loading={loading}
                            restaurants={
                                filteredRestaurants.length
                                    ? currentFilteredRestaurants
                                    : currentRestaurants
                            }
                        />
                    )}
            </Layout>
        </Fragment>
    );
};

export default App;
