import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from './components/dashboard'
import Settings from './components/settings'
import Home from './components/home'
import Gallery from "./components/gallery";
import './App.css'

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
                <Route path="gallery" element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
