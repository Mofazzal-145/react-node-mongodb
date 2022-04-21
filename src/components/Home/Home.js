import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (

        <div>
            <h2>The number of users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                    key={user._id}
                    >{user.name}:: {user.email}
                    <button>Delete</button>
                    </li>)
                    
                }
            </ul>
        </div>
    );
};

export default Home;