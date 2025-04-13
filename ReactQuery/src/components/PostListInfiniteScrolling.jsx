import {
  useMutation,
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { addPost, fetchPosts, fetchTags } from "../api/api";
import PostCard from "./PostCard";
import { useRef, useEffect } from "react";

const PostListInfiniteScrolling = () => {
  const queryClient = useQueryClient();
  const loaderRef = useRef(null);

  const {
    data: tagsData,
    isLoading: isTagsLoading,
    isError: isTagsError,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    getNextPageParam: (lastPage) => lastPage.data.next ?? undefined,
    staleTime: 1000 * 60 * 5,
  });

  const {
    mutate,
    isPending,
    isError: isPostError,
    reset,
  } = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );
    if (!title || !tags.length) return;

    mutate({ title, tags });
    e.target.reset();
  };

  // Auto-load on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          console.log("Auto-loading next page...");
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    const el = loaderRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [fetchNextPage, hasNextPage]);

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
              tagsData.map((t) => (
                <div key={t} className="tag">
                  <input type="checkbox" name={t} id={t} />
                  <label htmlFor={t}>#{t}</label>
                </div>
              ))}
          </div>
          <button className="post-btn" type="submit">
            Post
          </button>
        </form>
      </div>

      {(isLoading || isPending) && <h1>Loading...</h1>}
      {isError && <h1>Could not load posts.</h1>}
      {isPostError && (
        <h1 onClick={() => reset()}>
          Could not create post. Click to dismiss.
        </h1>
      )}

      <div className="posts-container">
        {data?.pages.map((page) =>
          page.data.data.map((post) => (
            <PostCard key={post.id} title={post.title} tags={post.tags} />
          ))
        )}

        {/* 👇 Infinite scroll trigger */}
        <div ref={loaderRef} style={{ height: "50px", marginTop: "20px" }} />
      </div>
      {/* 👇 Optional "Load More" button */}
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          style={{ display: "block", margin: "20px auto" }}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
      {!hasNextPage && <p style={{ textAlign: "center" }}>No more posts.</p>}
    </div>
  );
};

export default PostListInfiniteScrolling;
