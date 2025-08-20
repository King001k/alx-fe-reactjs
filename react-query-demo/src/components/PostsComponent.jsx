import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError } = useQuery(
    ["posts"],
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5, // 5 minutes
      staleTime: 1000 * 30, // 30 seconds
      refetchOnWindowFocus: false, // don't refetch on window focus
      keepPreviousData: true, // keep old data while fetching new
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
