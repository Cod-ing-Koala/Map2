import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';
 
const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'one of the most famous shit',
        imageUrl : 'https://pbs.twimg.com/profile_images/1272532349151072262/kBEZiWIQ.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator:'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'one of the most famous shit',
        imageUrl : 'https://pbs.twimg.com/profile_images/1272532349151072262/kBEZiWIQ.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator:'u2'
    }
];

const UserPlaces = () => { 
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId )
    return <PlaceList items={DUMMY_PLACES} /> ;

};
export default UserPlaces;
 
