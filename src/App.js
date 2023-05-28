import './App.css';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import UpcomingPage from './pages/UpcomingPage'
import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='app'>
          <Header/>
          <Routes>
            <Route path='/' exact element={<HomePage/>} /> {/* 'exact' to only render this page when the path is exactly that */}
            <Route path='/books' element={<BooksPage/>} />
            <Route path='/upcoming' element={<UpcomingPage/>} /> 
            <Route path='/about' element={<AboutPage/>} /> 
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
