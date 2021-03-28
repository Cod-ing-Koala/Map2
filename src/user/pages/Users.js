import React from 'react';
import UsersList from '../components/UsersList';
const Users = () => {
const USERS = [
    {
    id: 'u1',
    name:'Max',
    image: 'https://images.pexels.com/photos/4491469/pexels-photo-4491469.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4491469.jpg&fm=jpg',
    places: 3,
    }    
];
return <UsersList items ={USERS}
/>
};
export default Users;