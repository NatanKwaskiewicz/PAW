import { Link } from 'react-router'

const Gallery = () => {
    return (
        <div>
            <h1>Gallery</h1>
            <h3>Hello there, this is the gallery page</h3>
            <p>Here you will find a selection of beautiful photos</p>
            <button>
                <Link to='/'>Back to the Home page</Link>
            </button>
        </div>
    );
}

export default Gallery;
