import { Link } from "react-router-dom";

const blogPosts = [
  { id: 1, title: "React Router Basics" },
  { id: 2, title: "Advanced Routing in React" },
  { id: 3, title: "Protected Routes Explained" },
];

function Blog() {
  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
