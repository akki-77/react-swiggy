import React, { useState } from 'react';

import RestCard from './RestCard';
import resData from '../utils/mockData.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Body = () => {

    const restSearch = (e) => {
        e.preventDefault();
    }
    
    const [listOfRestaurents, setListOfRestaurents] = useState(resData);
    
    // const topRatedRest = () => {
    //     console.log(listOfRestaurents);
    //     let topRatedRestList = listOfRestaurents.data.cards[0].card.card.gridElements.infoWithStyle.restaurants.filter((res) => (
    //         res?.info?.avgRating > 4
    //     ));
    //     setListOfRestaurents(topRatedRestList);
    // }

    return (
        <div className='body'>
            <div className='rest-search'>
                <div className='rest-search-icon'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <form onSubmit={restSearch}>
                    <input
                        className='rest-search-field'
                        type="text"
                        placeholder="Search Reastaurent"
                    />
                </form>
            </div>
            <span>
                <button className='top-rated-btn' onClick={() => {
                    
                    console.log(listOfRestaurents.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
                    const topRatedRestList = listOfRestaurents.data.cards[0].card.card.gridElements.infoWithStyle.restaurants.filter(
                        (res) => res?.info?.avgRating > 4
                    );
                    console.log('Top rated restaurants:', topRatedRestList);

                    // setListOfRestaurents(topRatedRestList);
                    // To update the restaurants array while keeping the rest of the structure intact, you need to perform a deep update. 
                    // This is why we use the spread operator and update only the nested properties that change.

                    setListOfRestaurents((prevState) => ({
                        ...prevState,
                        data: {
                            ...prevState.data,
                            cards: [
                                {
                                    ...prevState.data.cards[0],
                                    card: {
                                        ...prevState.data.cards[0].card,
                                        card: {
                                            ...prevState.data.cards[0].card.card,
                                            gridElements: {
                                                ...prevState.data.cards[0].card.card.gridElements,
                                                infoWithStyle: {
                                                    ...prevState.data.cards[0].card.card.gridElements.infoWithStyle,
                                                    restaurants: topRatedRestList,
                                                },
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    }));

                }}>TOP RATED</button>
            </span>
            <div className='card-cont'>
                {listOfRestaurents.data.cards[0].card.card.gridElements.infoWithStyle.restaurants.map((restaurant) => (
                    <RestCard key={restaurant?.info?.id} restaurantData={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Body;