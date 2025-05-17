import './App.css'
import Navbar from './components/common/nav-bar'
import CollectionPoints from './components/pages/collectionPoints'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/home'
import NewsPage from './components/pages/news'
import MaybeShowNavBar from './components/pages/mayBeShowNavBar'
import RegistrationPage from './components/pages/registration'
import LoginPage from './components/pages/login'

function App() {
  return (
    <Router>
      <MaybeShowNavBar>
      <Navbar />
      </MaybeShowNavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collectionPoints" element={<CollectionPoints />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App
