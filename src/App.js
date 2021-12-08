import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Authenticate from './pages/Authenticate/Authenticate'
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';

const isAuth = true;
const user = {
  activated: true
}

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>

          <Route element={<GuestRoute />}>
            <Route index element={<Home />} path='/' />
          </Route>
          <Route element={<GuestRoute />}>
            <Route element={<Authenticate />} path='/authenticate' />
          </Route>
          <Route element={<SemiProtectedRoute />} >
            <Route element={<Activate />} path='/activate' />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/rooms" element={<Rooms />} />
          </Route>
        </Routes>

      </Router>
    </>
  );
}

const GuestRoute = () => {
  return isAuth ? <Navigate to="/rooms" /> : <Outlet />
}
const SemiProtectedRoute = () => {
  return !isAuth ? <Navigate to="/" /> : isAuth && !user.activated ? <Outlet /> : <Navigate to="/rooms" />
}
const ProtectedRoute = () => {
  return !isAuth ? <Navigate to="/" /> : isAuth && !user.activated ? <Navigate to="/activate" /> : <Outlet />
}
export default App;
