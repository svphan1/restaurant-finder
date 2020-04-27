import React from 'react';
import classes from './Pagination.module.css';

const Pagination = ({ restaurantsPerPage, totalRestaurants, paginate }) => {
    const pageNumbers = [];

    for (
        let i = 1;
        i <= Math.ceil(totalRestaurants / restaurantsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={classes.Pagination}>
                <span>Page:</span>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
