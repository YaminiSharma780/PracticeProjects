import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function SearchMyPosts() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("https://dummyjson.com/posts");
  //       const data = await res.json();
  //       setPosts(data.posts);
  //     };
  //     fetchData();
  //   }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => setPosts(res.data.posts));
  }, []);

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(text.toLowerCase())
  );
  return (
    <div>
      <div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="text"
          value={text}
          id="text"
        />
      </div>
      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((p, i) => {
            return (
              <div key={i}>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </div>
            );
          })
        ) : (
          <div>No Data Found..</div>
        )}
      </div>
    </div>
  );
}
