import styles from './Error.module.scss'

interface ErrorProps {
    message: string
}

const Error = ({ message }: ErrorProps) => {
    return <div className={styles.Error}>{message}</div>
}

export default Error
