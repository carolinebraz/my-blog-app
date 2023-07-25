import './App.css';
import Home from './pages/home/Home';
import Post from './pages/post/Post';


function App() {
  return (
    <>
      <Home />
      <Post title="Books" text="“A reader lives a thousand lives before he dies. The man who never reads lives only one.”" author="[George R. R. Martin]" />
      <Post title="Music" text="“Without music, life would be a mistake.”" author="[Friedrich Nietzsche]" />
    </>
  );
}

export default App;