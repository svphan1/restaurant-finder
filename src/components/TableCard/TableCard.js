import React from 'react';
import classes from './TableCard.module.css';
import Button from '../UI/Button/Button';

const TableCard = (props) => {
    let sortedResult = props.restaurants.sort(function (a, b) {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
    });

    return (
        <div>
            {sortedResult.map((item) => (
                <div key={item.id} className={classes.TableCard}>
                    <img
                        src="http://lorempixel.com/250/200/food"
                        alt="Restaurant"
                    ></img>
                    <div className={classes.TableText}>
                        <p>{item.name}</p>
                        <p>
                            Genre: <span>{item.genre}</span>
                        </p>
                        <p>Phone: {item.telephone}</p>
                        <p>
                            Location: {item.city}, {item.state}
                        </p>
                        <Button>Order Now</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TableCard;
