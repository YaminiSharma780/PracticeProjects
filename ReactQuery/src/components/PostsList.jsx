import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, fetchPosts, fetchTags } from "../api/api";
import PostCard from "./PostCard";
import { useState } from "react";

const PostsList = () => {
  const [page, setPage] = useState(1);

  const {
    data: postsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", { page }],
    queryFn: () => fetchPosts(page),
    staleTime: 1000 * 60 * 5,
  });

  const queryClient = useQueryClient();

  const {
    mutate,
    isPending,
    isError: isPostError,
    error: postError,
    reset,
  } = useMutation({
    mutationFn: addPost,
    onMutate: () => {
      return { id: 1 };
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        exact: true,
        predicate: (query) => {
          return query.queryKey[0] === "posts" && query.queryKey[1].page >= 2;
        },
      });
    },
    // onError: (error, variables, context) => {},
    // onSettled: (data, error, variables, context) => {},
  });

  const {
    data: tagsData,
    isLoading: isTagsLoading,
    isError: isTagsError,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );

    if (!title || !tags) {
      return;
    }
    mutate({ id: postsData?.data?.length + 1, title, tags });
    e.target.reset();
  };

  return (
    <div className="main-container">
      <div className="create-post-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type here.."
            className="post-input"
            name="title"
          />
          <div className="tag-container">
            {tagsData &&
              tagsData.map((t, i) => {
                return (
                  <div key={t} className="tag">
                    <input type="checkbox" name={t} />
                    <label htmlFor={t}>#{t}</label>
                  </div>
                );
              })}
          </div>
          <button className="post-btn" type="submit">
            Post
          </button>
        </form>
      </div>
      {isLoading && isPending && <h1>Loading..</h1>}
      {isError && <h1>Oh Snap! we are unable to load data..</h1>}
      {isPostError && (
        <h1 onClick={() => reset()}>
          Oh Snap! we are unable to create post..Click me, I will go away
        </h1>
      )}
      <div className="pages">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          className="prev-btn"
          disabled={!postsData?.prev}
        >
          Prev
        </button>
        <span className="curr-btn">{page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={!postsData?.next}
          className="next-btn"
        >
          Next
        </button>
      </div>
      <div className="posts-container">
        {postsData &&
          postsData.data?.map((post) => {
            return (
              <PostCard key={post.id} title={post.title} tags={post.tags} />
            );
          })}
      </div>
    </div>
  );
};
export default PostsList;
