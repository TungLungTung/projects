import React from "react";
import withData from "./with-data";

const UserProfile = ({name,email,data}) => {
    return (
        <div>
            <h2>{name} - {email}</h2>
            {data.map(post => (
                <div key={post.id}>
                    + {post.title}
                </div>
            ))
            }
        </div>
    );
}

export default withData(UserProfile);