import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
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
import PostList from './components/posts/PostList';
import PostForm from './components/posts/PostForm';
import DeletePost from './components/posts/DeletePost';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[75vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/topics" element={<TopicList />} />
              <Route path="/addTopic" element={<TopicForm />} />
              <Route path="/editTopic/:id" element={<TopicForm />} />
              <Route path="/deleteTopic/:id" element={<DeleteTopic />} />
              <Route path="/posts" element={<PostList />} />
              <Route path="/addPost" element={<PostForm />} />
              <Route path="/editPost/:id" element={<PostForm />} />
              <Route path="/deletePost/:id" element={<DeletePost />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;