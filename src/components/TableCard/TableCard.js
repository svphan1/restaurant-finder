import React from 'react';
import classes from './TableCard.module.css';

const TableCard = () => {
    return (
        <div className={classes.TableCard}>
            <p>Name:</p>
            <p>Genre:</p>
            <p>Phone:</p>
            <p>City State</p>
        </div>
    );
};

export default TableCard;
