/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
const GridLayout = () => {

    const [users, setUsers] = useState([]);

    const loadUserData = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(data => setUsers(data.data));

    }
    return (
        <div>
            <div className="header text-center color:red">
                <h1 className="head-title">User Card Task 2 LetsGrowMore</h1>
                <button className="head-btn btn btn-primary" onClick={loadUserData}>
                    Get User
                </button>
            </div>
            <div className="users-space">
                {users.map(({ id, email, first_name, last_name, avatar }) => (
                    <div className="card" style={{ width: '12rem' }}>
                        <div className="main">
                            <img className="card-img-top" src={avatar} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-id" key={id}>
                                    ID:{id}
                                </h5>
                                <h5
                                    className="card-title"
                                    key={id}>{first_name}</h5>
                                <h5 className='card-title' key={id}>
                                    {last_name}
                                </h5>
                                <p className="card-text" key={id}>
                                    {email}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridLayout
