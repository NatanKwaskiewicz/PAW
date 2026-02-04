import styles from './PostList.module.scss'
import type {Post} from '../../types/Post/Post.ts'

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
                <div className={styles.PostListLoading}>
                    Loading...
                </div>
            )}
            {isError && (
                <div className={styles.PostListError}>
                    An error occurred while fetching posts.
                </div>
            )}
            {!isLoading && !isError && (
            <>
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