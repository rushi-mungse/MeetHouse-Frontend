import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Authenticate from './pages/Authenticate/Authenticate'

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact element={<Home />} path='/' />
          <Route element={<Authenticate />} path='/authenticate' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
