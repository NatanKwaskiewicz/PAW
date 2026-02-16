import styles from './Home.module.scss'
import homepageImage from '../../assets/images/homepage.jpg'
import homepageImage1 from '../../assets/images/homepage1.jpg'
import homepageImage2 from '../../assets/images/homepage2.jpg'
import homepageImage3 from '../../assets/images/homepage3.jpg'
import homepageImage4 from '../../assets/images/homepage4.jpg'
import homepageImage5 from '../../assets/images/homepage5.jpg'

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.HomeLeft}>
                <h1 className={styles.HomeLeftHeading}>Home</h1>
                <p className={styles.HomeLeftText}>
                    Here you will find a plethora of meaningful articles along
                    with comments from users all over the world. Read, learn and
                    derive inspiration to your heart's content.
                </p>
            </div>
            <div className={styles.HomeRight}>
                <img
                    src={homepageImage}
                    alt="homepage"
                    className={styles.HomeRightImg}
                />
                <img
                    src={homepageImage1}
                    alt="homepage1"
                    className={styles.HomeRightImg}
                />
                <img
                    src={homepageImage2}
                    alt="homepage2"
                    className={styles.HomeRightImg}
                />
                <img
                    src={homepageImage3}
                    alt="homepage3"
                    className={styles.HomeRightImg}
                />
                <img
                    src={homepageImage4}
                    alt="homepage4"
                    className={styles.HomeRightImg}
                />
                <img
                    src={homepageImage5}
                    alt="homepage5"
                    className={styles.HomeRightImg}
                />
            </div>
        </div>
    )
}

export default Home
