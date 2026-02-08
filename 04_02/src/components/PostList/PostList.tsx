import styles from './PostList.module.scss'
import type {Post} from '../../types/Post/Post.ts'
import Loading from '../Loading'
import Error from "../Error";

import {Link} from 'react-router'
import {useEffect, useState} from "react";

const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        (() => {
            setIsLoading(true)
        })()
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((json: Post[]) => {
            setPosts(json)
        })
        .catch(() => {
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    return (
        <div className={styles.PostList}>
            {isLoading && (
                <Loading />
            )}
            {isError && (
                <Error
                    message={"An error occurred while fetching posts."}
                />
            )}
            {!isLoading && !isError && (
            <>
                <h1 className={styles.PostListHeading}>
                    Available posts
                </h1>
                {posts.length === 0 && (
                    <div className={styles.PostListError}>
                        No posts found.
                    </div>
                )}
                {posts.map(post => (
                    <div className={styles.PostListPost} key={post.id}>
                        <h4 className={styles.PostListPostTitle}>
                            {post.title}
                        </h4>
                        <p className={styles.PostListPostBody}>
                            {post.body.substring(0, 30)}...
                        </p>
                        <Link
                            to={`/posts/${post.id}`}
                            className={styles.PostListPostLink}
                        >
                            Go to post
                        </Link>
                    </div>
                ))}
            </>
            )}
        </div>
    );
}

export default PostList;