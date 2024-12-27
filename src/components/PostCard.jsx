import "./../styles/PostList.css"
import {  useNavigate } from "react-router-dom";

export const PostCard = ({post})=>{
    const navigate = useNavigate()
    return (
        <div className="detail-card" onClick={()=>navigate(`/posts/${post.id}`)}>
        <h2>Title: {post.title}</h2>
         <p><b>Details: </b>{post.body}</p>
         </div>
    )
}