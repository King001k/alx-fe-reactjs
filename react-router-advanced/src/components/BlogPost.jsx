import { useParams } from "react-router-dom";

const blogPosts = {
  1: "React Router Basics content...",
  2: "Advanced Routing in React content...",
  3: "Protected Routes Explained content...",
};

function BlogPost() {
  const { id } = useParams();
  const content = blogPosts[id] || "Post not found";

  return (
    <div>
      <h3>Blog Post {id}</h3>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;
