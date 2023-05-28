import './App.css';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='app'>
          <Header/>
          <Routes>
            <Route path='/' exact element={<HomePage/>} /> {/* 'exact' to only render this page when the path is exactly that */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
