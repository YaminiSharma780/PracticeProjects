import "./App.css";
import Search from "./Search";
import SearchMyPosts from "./SearchMyPosts";
import SearchPosts from "./SearchPosts";

function App() {
  return (
    <main className="main">
      <h3>Type a country name : </h3>
      {/* <Search /> */}
      {/* <SearchPosts /> */}
      <SearchMyPosts/>
    </main>
  );
}

export default App;
