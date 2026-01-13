import { BrowserRouter, Routes, Route } from 'react-router'
import Post from './components/Post/Post.tsx'
import Home from './components/Home/Home.tsx'
import CategoryList from "./components/CategoryList/CategoryList.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import './App.css'

function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="post" element={<Post />} />
                    <Route path="categories" element={<CategoryList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App