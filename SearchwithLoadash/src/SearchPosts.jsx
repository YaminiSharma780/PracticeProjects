import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch posts once component mounts
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.body.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Search Posts</h2>
      <input
        type="text"
        placeholder="Search by title or body..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <div style={{ marginTop: "20px" }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPosts;
