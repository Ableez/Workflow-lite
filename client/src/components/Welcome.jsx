import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>Welcome Page</h2>
      <Link to={"/login"}>
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Welcome;
