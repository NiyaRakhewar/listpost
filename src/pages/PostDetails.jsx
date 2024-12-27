import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostDetails } from "../utils/api";
import "./../styles/PostDetails.css";
const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const data = await fetchPostDetails(postId);
      setPost(data);
    };
    loadPost();
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
   <div className="detail-div">
     <div className="details-card">
      <h2>Post ID: {post.id}</h2>
      <h2>Title: {post.title}</h2>
      <div><b>Details:</b> {post.body}</div>
    </div>
   </div>
  );
};

export default PostDetail;
