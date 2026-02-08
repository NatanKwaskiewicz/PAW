import styles from './Post.module.scss'
import {useState, useEffect} from "react";
import {useParams} from "react-router";
import type {Post} from '../../types/Post/Post.ts'
import type {User} from '../../types/User/User.ts'
import CommentList from "../CommentList";
import Loading from "../Loading";
import Error from "../Error";

const Post = () => {
    const [post, setPost] = useState<Post>()
    const [user, setUser] = useState<User>()
    const [isPostLoading, setIsPostLoading] = useState(false)
    const [isUserLoading, setIsUserLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const { id }  = useParams()

    useEffect(() => {
        (()=> {
            setIsPostLoading(true)
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
                setIsPostLoading(false)
            })
    }, [id])

    useEffect(() => {
        if (!post?.userId) return;

        (()=> {
            setIsUserLoading(true)
        })()
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(response => response.json())
            .then((json: User) => {
                setUser(json)
            })
            .catch(()=> {
                setIsError(true)
            })
            .finally(() => {
                setIsUserLoading(false)
            })
    }, [post?.userId])

    return (
        <div className={styles.Post}>
            {isPostLoading || isUserLoading && (
                <Loading />
            )}
            {isError && (
                <Error
                    message={"An error occurred while fetching post"}
                />
            )}
            {!isPostLoading && !isUserLoading && !isError && (
                <>
                <h1 className={styles.PostTitle}>
                    {post?.title}
                </h1>
                <p className={styles.PostBody}>
                    {post?.body}
                </p>
                    <h5 className={styles.PostUser}>
                        User: {user?.username}
                    </h5>
                    <hr/>
                    <CommentList />
                </>
            )}
        </div>
    );
}

export default Post;