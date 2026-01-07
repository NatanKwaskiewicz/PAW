import { Link } from 'react-router'
import styles from './CategoryList.module.scss'

const CategoryList = () => {
    return (
        <div className={styles.CategoryList}>
            <h1>Categories</h1>
            <h3></h3>
            <p></p>
            <button>
                <Link to='/'>Back to the Home page</Link>
            </button>
        </div>
    );
}

export default CategoryList;