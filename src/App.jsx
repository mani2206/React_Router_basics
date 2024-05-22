import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Missing from "./components/Missing";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import Post from "./components/Post";

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PostLayout from "./components/PostLayout";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li><Link to="/newpost">Newpost</Link></li> */}
          <li>
            <Link to="/postpage">PostPage</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route  path="/postpage" element={<PostLayout/>}>
          <Route index element={<PostPage />} />
          <Route path=":id" element={<Post />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
      {/* <Header/>
   <Nav/>
   
  
   <PostPage />
  
   <Missing/>
   <Footer/> */}
    </>
  );
}

export default App;
