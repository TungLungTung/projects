import { Link } from "react-router-dom";

const NotFound404 = () => {
    return (
        <div>
            <h1>Sorry, This page not found</h1>
            <p>Click <Link to="/">here</Link> to go to homepage</p>
        </div>
    );
}
 
export default NotFound404