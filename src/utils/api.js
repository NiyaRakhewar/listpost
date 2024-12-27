import axios from "axios";

export const createPost = async (post) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
    return response.data;
  };
  

  export const fetchPostDetails = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  };

  export const fetchAllPosts = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return response.data;
  };
export const fetchPosts = async (start, limit) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
  );
  return response.data;
};
