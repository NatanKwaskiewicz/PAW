import { Link } from 'react-router'
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <h1>Blog</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
