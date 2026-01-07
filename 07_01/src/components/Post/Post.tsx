import { Link } from 'react-router'

const Post = () => {
    return (
        <div>
            <h1>Post</h1>
            <h3></h3>
            <button>
                <Link to='/'>Back to the Home page</Link>
            </button>
        </div>
    );
}

export default Post;