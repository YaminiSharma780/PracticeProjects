import React, { useEffect, useState, useRef, useCallback } from "react";

export default function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const limit = 10;
  // Creates a persistent ref to store the IntersectionObserver instance across renders
  const observer = useRef();

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/posts?limit=${limit}&skip=${page * limit}`
      );
      const data = await res.json();
      // If you have reached the end of the list
      if (data.posts.length === 0) {
        setHasMore(false);
      } else {
        // Append the newly fetched posts to the existing ones
        setItems((prev) => [...prev, ...data.posts]);
        // If all data is loaded, stop fetching more
        if (items.length + data.posts.length >= data.total) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
    setLoading(false);
  };

  // When page changes, call fetchData()
  useEffect(() => {
    fetchData();
  }, [page]);

  // ref callback function sets up IntersectionObserver on the last item in the list
  const lastItemRef = useCallback(
    (node) => {
      // Don't do anything if already loading
      if (loading) return;
      // Disconnect the previous observer
      if (observer.current) observer.current.disconnect();
      // Create a new IntersectionObserver to monitor the node
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // load → load next page.
          setPage((prev) => prev + 1);
        }
      });
      // If the node exists (the last item), start observing it.
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      {/* If it’s the last item, attach the ref to it  */}
      {items.map((item, index) => {
        // Render the last item with the ref so that it triggers more loading
        if (index === items.length - 1) {
          return (
            <div ref={lastItemRef} key={`${item.id}-${index}`}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <hr />
            </div>
          );
        }
        // For all other items, just render without the ref.
        return (
          <div key={`${item.id}-${index}`}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        );
      })}
      {/* Show loading text when fetching */}
      {loading && <p>Loading more items...</p>}
      {/* "No more items" message when done */}
      {!hasMore && <p>No more items to load</p>}
    </div>
  );
}
