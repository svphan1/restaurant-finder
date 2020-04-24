import React, { useState, useEffect } from 'react';
import classes from './TableCard.module.css';

const TableCard = () => {
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
    });

    return (
        <div>
            {data.slice(0, 10).map((item) => (
                <div key={item.id} className={classes.TableCard}>
                    <p>{item.name}</p>
                    <p>{item.genre}</p>
                    <p>{item.telephone}</p>
                    <p>
                        {item.city} {item.state}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default TableCard;
