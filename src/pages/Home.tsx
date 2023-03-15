import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <Link to="/about">About</Link>
            <Link to="/sdfsdiof">前往404頁面</Link>
        </div >
    );
};

export default Home;