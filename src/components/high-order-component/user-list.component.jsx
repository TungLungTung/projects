import React from "react";
import withData from "./with-data";

const UserList = ({data}) => {
    return (
        <div className='user-container'>
            {data.map(user => (
                <div className='user' key={user.id}>+ {user.name}</div>
            ))}
        </div>
    );
}


export default withData(UserList);