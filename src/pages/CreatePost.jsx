import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../utils/api";
import "../styles/CreatePost.css";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return alert("Title is required.");
    if (description.length > 1000) return alert("Description exceeds 1000 characters.");

    await createPost({ title, body: description });
    alert("Post created successfully!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={1000}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePost;
