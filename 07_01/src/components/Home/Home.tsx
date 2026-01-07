import { Link } from 'react-router'
import NavBar from "../NavBar/NavBar.tsx"
import styles from "./Home.module.scss"

const Home = () => {
    return (
        <div className={styles.Home}>
            <NavBar />
            <h1>Home</h1>
            <p>Welcome to my site, this is the main page. Yessir</p>
            <button>
                <Link to="/post">Go to the Post page</Link>
            </button>
            <button>
                <Link to="/categories">Go to the Categories page</Link>
            </button>
        </div>
    );
}

export default Home;