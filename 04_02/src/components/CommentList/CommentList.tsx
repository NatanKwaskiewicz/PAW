import {useEffect, useState} from "react";
import type{ Comment } from "../../types/Comment/Comment.ts";
import {useParams} from "react-router"
import styles from "./CommentList.module.scss"
import Loading from "../Loading";
import Error from "../Error";

const CommentList = () => {
    const [comments, setComments] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        (() => {
            setIsLoading(true)
        })()
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then((json: Comment[]) => {
                setComments(json)
            })
            .catch(() => {
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <div className={styles.CommentList}>
            {isLoading && (
                <Loading />
            )}
            {isError && (
                <Error
                    message={"An error occurred while fetching comments"}
                />
            )}
            {!isLoading && !isError && (
                <>
                    <h2 className={styles.CommentListHeading}>
                        Comments
                    </h2>
                {comments.length === 0 && (
                    <div className={styles.CommentListError}>
                        No comments found for this post.
                    </div>
                )}
                {comments.map(comment => (
                    <div className={styles.CommentListComment}>
                        <h4 className={styles.CommentListCommentName} key={comment.id}>
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