import React, { Fragment } from 'react';
import classes from './TableCard.module.css';
import food from '../../assets/images/food.jpg';
import Button from '../UI/Button/Button';

const TableCard = (props) => {
    let sortedResult = props.restaurants.sort(function (a, b) {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
    });

    if (props.loading) {
        return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;
    }

    return (
        <Fragment>
            {sortedResult.map((item) => (
                <div key={item.id} className={classes.TableCard}>
                    <img src={food} alt="Restaurant"></img>
                    <div className={classes.TableText}>
                        <p className={classes.RestaurantName}>{item.name}</p>
                        <p>
                            Genre: <span>{item.genre}</span>
                        </p>
                        <p>Phone: {item.telephone}</p>
                        <p>
                            Location: {item.city}, {item.state}
                        </p>
                        <div className={classes.BtnContainer}>
                            <Button>Order Now</Button>
                            <a className={classes.Button} href="#moreinfo">
                                More Info
                            </a>
                        </div>
                        <div className={classes.Content}>
                            <div id="moreinfo" className={classes.Overlay}>
                                <div className={classes.Popup}>
                                    <p>Hours: {item.hours}</p>
                                    <p>Attire: {item.attire}</p>
                                    <p>Website: {item.website}</p>
                                    <p>
                                        Tags: <span>{item.tags}</span>
                                    </p>
                                    <a className={classes.Close} href="#">
                                        &times;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default TableCard;
