import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/profile">Profile (Protected)</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
