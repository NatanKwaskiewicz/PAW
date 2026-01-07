import { Link } from 'react-router'
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <Link to='/'>Home</Link>
            <Link to='/post'>Post</Link>
            <Link to='/categories'>Categories</Link>
        </div>
    );
}

export default NavBar;