import styles from './CommentForm.module.scss'
import { useState } from 'react'
import { useCreateComment } from '../../hooks/useCreateComment.ts'
import { useParams } from 'react-router'

const CommentForm = () => {
    const { id } = useParams<{ id: string }>()
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const { mutate: submitComment, isPending } = useCreateComment(Number(id))
    const postId: number = Number(id)

    const handleSubmission = () => {
        submitComment(
            { author, content, postId },
            {
                onSuccess: () => {
                    setAuthor('')
                    setContent('')
                },
            }
        )
    }

    return (
        <form onSubmit={handleSubmission} className={styles.CommentForm}>
            <h2 className={styles.CommentFormHeading}>Add a comment</h2>
            <label className={styles.CommentFormLabel} htmlFor="author">
                User:
            </label>
            <input
                className={styles.CommentFormInput}
                id="author"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <label className={styles.CommentFormLabel} htmlFor="contentInput">
                Content:
            </label>
            <textarea
                className={styles.CommentFormContent}
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            ></textarea>
            <button
                className={styles.CommentFormButton}
                type="submit"
                disabled={isPending}
            >
                {isPending ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    )
}

export default CommentForm
