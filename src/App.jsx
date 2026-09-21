import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import LoginPage from './page/LoginPage';
import PaymentPage from './page/PaymentPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path='/payments' element={<PaymentPage/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
