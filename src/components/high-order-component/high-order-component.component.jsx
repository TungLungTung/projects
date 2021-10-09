import React from "react";

import UserProfile from "./user-profile.component";
import UserList from "./user-list.component";

const HighOrderComponent = () => {
    return (
        <div>
            <h2 style={{color:'red'}}>USER PROFILES</h2>
            {/* Render UserProfile Component */}
            <UserProfile name='Tung Le' email='lttung.net@gmail.com' numberOfPosts='5' dataSourceUrl='https://jsonplaceholder.typicode.com/posts' />
            <hr></hr>
            <h2 style={{color:'green'}}>TOP 10 USERS</h2>
            <UserList dataSourceUrl='https://jsonplaceholder.typicode.com/users' numberOfPosts='10' />
        </div>
    );
}
 
export default HighOrderComponent;