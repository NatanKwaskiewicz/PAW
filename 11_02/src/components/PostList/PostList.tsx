import styles from './PostList.module.scss'
import Loading from '../Loading'
import Error from '../Error'
import { Link } from 'react-router'
import { usePosts } from '../../hooks/usePosts.ts'

const PostList = () => {
    const { data: posts, isLoading, isError } = usePosts()

    return (
        <div className={styles.PostList}>
            {isLoading && <Loading />}
            {isError && (
                <Error message={'An error occurred while fetching posts.'} />
            )}
            {!isLoading && !isError && posts && (
                <>
                    <h1 className={styles.PostListHeading}>Available posts</h1>
                    {posts.length === 0 && (
                        <div className={styles.PostListError}>
                            No posts found.
                        </div>
                    )}
                    {posts.map((post) => (
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
                                See post
                            </Link>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default PostList
