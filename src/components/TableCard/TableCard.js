import React from 'react';
import classes from './TableCard.module.css';

const TableCard = (props) => {
    let limitedResult = props.result.slice(0, 10);
    let sortedResult = limitedResult.sort(function (a, b) {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
    });

    return (
        <div>
            {sortedResult.map((item) => (
                <div key={item.id} className={classes.TableCard}>
                    <p>{item.name}</p>
                    <p>{item.genre}</p>
                    <p>{item.telephone}</p>
                    <p>
                        {item.city}, {item.state}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default TableCard;
