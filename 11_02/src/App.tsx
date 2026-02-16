import { Routes, Route } from 'react-router'
import PostList from './components/PostList'
import Home from './components/Home'
import CategoryList from './components/CategoryList'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Post from './components/Post'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/categories" element={<CategoryList />} />
                <Route path="/posts/:id" element={<Post />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
