import "./App.css";
import PostListInfiniteScrolling from "./components/PostListInfiniteScrolling";
import PostsList from "./components/PostsList";

function App() {
  return (
    <>
      <h1>My Posts</h1>
      {/* <PostsList /> */}
      <PostListInfiniteScrolling />
    </>
  );
}

export default App;
