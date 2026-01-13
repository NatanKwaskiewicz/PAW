import { Link } from 'react-router'
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <h1>Blog</h1>
            <section>
            <Link to='/'>Home</Link>
            <Link to='/post'>Post</Link>
            <Link to='/categories'>Categories</Link>
            </section>
        </div>
    );
}

export default NavBar;