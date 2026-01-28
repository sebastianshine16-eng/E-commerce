import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1>Oops! You seem lost 😵</h1>
      <button onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
