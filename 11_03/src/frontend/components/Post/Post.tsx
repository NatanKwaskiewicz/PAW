import styles from './Post.module.scss'
import { useParams } from 'react-router'
import CommentList from '../CommentList'
import Loading from '../Loading'
import Error from '../Error'
import { usePost } from '../../hooks/usePost.ts'
import CommentForm from '../CommentForm'

const Post = () => {
    const { id } = useParams<{ id: string }>()
    const { data: post, isLoading, isError } = usePost(id!)

    return (
        <div className={styles.Post}>
            {isLoading && <Loading />}
            {isError && (
                <Error message={'An error occurred while fetching post'} />
            )}
            {!isLoading && !isError && post && (
                <>
                    <h1 className={styles.PostTitle}>{post?.title}</h1>
                    <p className={styles.PostBody}>{post?.content}</p>
                    <h5 className={styles.PostAuthor}>{post?.author}</h5>
                    <hr />
                    <div className={styles.PostCommentContainer}>
                        <CommentList />
                        <div className={styles.PostCommentContainerLine}></div>
                        <CommentForm />
                    </div>
                </>
            )}
        </div>
    )
}

export default Post
