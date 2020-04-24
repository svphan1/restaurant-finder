import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import TableCard from '../components/TableCard/TableCard';
import Background from '../components/UI/Background/Background';
import './App.css';

const App = () => {
    const [data, setData] = useState([]);

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

    return (
        <div>
            <Layout>
                <Background />
                <TableCard result={data} />
            </Layout>
        </div>
    );
};

export default App;
