import { Link } from 'react-router'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to my site, this is the main page. Yessir</p>
            <button>
            <Link to="/dashboard">Go to the Dashboard page</Link>
            </button>
            <button>
                <Link to="/settings">Go to the Settings page</Link>
            </button>
            <button>
                <Link to="/gallery">Go to the Gallery page</Link>
            </button>
        </div>
    );
}

export default Home;
