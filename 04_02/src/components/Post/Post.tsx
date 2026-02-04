import styles from './Post.module.scss'
import {useState, useEffect} from "react";
import {useParams} from "react-router";
import type {Post} from '../../types/Post/Post.ts'

const Post = () => {
    const [post, setPost] = useState<Post>()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        (()=> {
            setIsLoading(true)
        })()
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then((json: Post) => {
                setPost(json)
            })
            .catch(() => {
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <div className={styles.Post}>
            {isLoading && (
                <div className={styles.PostListLoading}>
                    Loading...
                </div>
            )}
            {isError && (
                <div className={styles.PostListError}>
                    An error occurred while fetching posts.
                </div>
            )}
            {/*{!isLoading && !isError && (*/}
            {/*    <div className={styles.PostTitle}>*/}
            {/*        {post?.title}*/}
            {/*    </div>*/}
            {/*    <p>{post?.body}</p>*/}
            {/*)}*/}

        </div>
    );
}

export default Post;