// export const fetchPosts = async (page) => {
//   // const response = await fetch("http://localhost:3000/posts?_sort=-id");
//   const response = await fetch(
//     `http://localhost:3000/posts?_sort=-id&${
//       page ? `_page=${page}&_per_page=5` : ""
//     }`
//   );
//   const postsData = await response.json();
//   console.log("postsData : ", postsData);
//   return postsData;
// };

export const fetchPosts = async (page = 1) => {
  const perPage = 5;

  const response = await fetch(
    `http://localhost:3000/posts?_sort=-id&_page=${page}&_per_page=${perPage}`
  );
  const postsData = await response.json();
  console.log(postsData);
  return {
    data: postsData,
    page,
    next: postsData.length === perPage,
  };
};

export const fetchTags = async () => {
  const response = await fetch("http://localhost:3000/tags");
  const tagsData = await response.json();
  return tagsData;
};

export const addPost = async (post) => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

// export { fetchPosts, fetchTags, addPost };
