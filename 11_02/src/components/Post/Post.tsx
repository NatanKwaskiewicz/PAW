import styles from './Post.module.scss'
import { useParams } from 'react-router'
import CommentList from '../CommentList'
import Loading from '../Loading'
import Error from '../Error'
import Username from '../Username'
import { usePost } from '../../hooks/usePost.ts'

const Post = () => {
    const { id } = useParams<{ id: string }>()
    const { data: post, isLoading, isError } = usePost(id)

    return (
        <div className={styles.Post}>
            {isLoading && <Loading />}
            {isError && (
                <Error message={'An error occurred while fetching post'} />
            )}
            {!isLoading && !isError && post && (
                <>
                    <h1 className={styles.PostTitle}>{post?.title}</h1>
                    <p className={styles.PostBody}>{post?.body}</p>
                    <Username />
                    <hr />
                    <CommentList />
                </>
            )}
        </div>
    )
}

export default Post
