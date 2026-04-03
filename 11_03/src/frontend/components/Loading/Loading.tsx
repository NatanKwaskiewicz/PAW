import styles from './Loading.module.scss'
import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className={styles.Loading}>
            <ThreeDots color="#0D0D0D" />
        </div>
    )
}

export default Loading
