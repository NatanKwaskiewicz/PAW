import { useParams } from 'react-router'
import { useUser } from '../../hooks/useUser.ts'
import styles from './Username.module.scss'
import Loading from '../Loading'
import Error from '../Error'

const Username = () => {
    const { id } = useParams<{ id: string }>()
    const { data: user, isLoading, isError } = useUser(id)

    return (
        <>
            {isLoading && <Loading />}
            {isError && (
                <Error message={'An error occurred while fetching user'} />
            )}
            {!isLoading && !isError && user && (
                <h5 className={styles.Username}>User: {user.username}</h5>
            )}
        </>
    )
}

export default Username
