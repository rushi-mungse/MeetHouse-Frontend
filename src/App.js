import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Authenticate from './pages/Authenticate/Authenticate'
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
import { useSelector } from 'react-redux';

// const isAuth = false;
// const user = {
//   activated:false 
// }

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
  const { isAuth } = useSelector(state => state.auth)
  return isAuth ? <Navigate to="/rooms" /> : <Outlet />
}
const SemiProtectedRoute = () => {
  const { isAuth, user } = useSelector(state => state.auth)
  return !isAuth ? <Navigate to="/" /> : isAuth && !user.activated ? <Outlet /> : <Navigate to="/rooms" />
}
const ProtectedRoute = () => {
  const { isAuth, user } = useSelector(state => state.auth)
  return !isAuth ? <Navigate to="/" /> : isAuth && !user.activated ? <Navigate to="/activate" /> : <Outlet />
}
export default App;
