import './App.css'
import Navbar from './components/common/nav-bar'
import CollectionPoints from './components/pages/collectionPoints'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/home'
import NewsPage from './components/pages/news'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collectionPoints" element={<CollectionPoints />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App
