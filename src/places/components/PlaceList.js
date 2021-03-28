import React from 'react';
import PlaceItem from './PlaceItem'
import Card from '../../shared/components/UIElements/Card'
 
const PlaceList = props => {
    if (props.items.length === 0) {
        return (<div className='place-list center'>
            <Card>
                <h2>
                    No places found fucking retard
                    <button>Share Place retard</button>
                </h2>
            </Card>
        </div>
        );
    }
    return (
        <ul className='place-list'>
            {props.items.map(place => 
            <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
            />)}
        </ul>
    );
};

export default PlaceList;