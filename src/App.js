import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsList from "./pages/PostsList";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetails";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/posts/:postId" element={<PostDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
