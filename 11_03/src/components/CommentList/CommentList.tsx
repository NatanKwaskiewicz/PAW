import { useParams } from 'react-router'
import styles from './CommentList.module.scss'
import Loading from '../Loading'
import Error from '../Error'
import { useComments } from '../../hooks/useComments.ts'

const CommentList = () => {
    const { id } = useParams<{ id: string | undefined }>()
    const { data: comments, isLoading, isError } = useComments(id)

    return (
        <div className={styles.CommentList}>
            {isLoading && <Loading />}
            {isError && (
                <Error message={'An error occurred while fetching comments'} />
            )}
            {!isLoading && !isError && comments && (
                <>
                    <h2 className={styles.CommentListHeading}>Comments</h2>
                    {comments.length === 0 && (
                        <div className={styles.CommentListError}>
                            No comments found for this post.
                        </div>
                    )}
                    {comments.map((comment) => (
                        <div
                            className={styles.CommentListComment}
                            key={comment.id}
                        >
                            <h4 className={styles.CommentListCommentName}>
                                Title: {comment.name}
                            </h4>
                            <h6 className={styles.CommentListCommentEmail}>
                                User: {comment.email}
                            </h6>
                            <p className={styles.CommentListCommentBody}>
                                {comment.body}
                            </p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default CommentList
