import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import UserProvider from './contexts/UserContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
export default App;