import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import TopicList from './components/topics/TopicList';
import TopicForm from './components/topics/TopicForm';
import DeleteTopic from './components/topics/DeleteTopic';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/topics" element={<TopicList />} />
              <Route path="/addTopic" element={<TopicForm />} />
              <Route path="/editTopic/:id" element={<TopicForm />} />
              <Route path="/deleteTopic/:id" element={<DeleteTopic />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;