import { useState, useEffect } from "react";
import { fetchAllPosts, fetchPosts } from "../utils/api";
import { PostCard } from "../components/PostCard";
import PostsListPlaceholder from "../components/PostsListPlaceholder";
import "./../styles/PostList.css"
import { useNavigate } from "react-router-dom";
const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [start, setStart] = useState(0);
  const limit = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts(start, limit);
      setPosts(data);
    };
    loadPosts();
  }, [start]);

  useEffect(() => {
    const allPosts = async () => {
      const data = await fetchAllPosts();
      setAllPosts(data);
    };
    allPosts();
  }, []);

 

  return (
    <div className="postList-div">
      <div className="post-title"><h1>Posts</h1>
      <button onClick={()=>navigate('/create')}>Create new post</button>
      </div>
      {posts.length === 0 ? <PostsListPlaceholder />: <div className="cardlist">{posts.map((post) => (
         <PostCard post={post}/>
        
      ))}</div>}

      <div className="pagination">
      <button disabled={start === 0} onClick={() => setStart(start - limit)}>
        Previous
      </button>
      <button disabled={posts.length === 0 || start === allPosts.length - limit } onClick={() => setStart(start + limit)}>Next</button>
      </div>
    </div>
  );
};

export default PostsList;
