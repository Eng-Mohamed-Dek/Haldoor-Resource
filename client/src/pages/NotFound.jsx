import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // Redirect to home
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.message}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <button style={styles.button} onClick={goHome}>
        Go Back Home
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    color: "#333",
    padding: "0 1rem",
  },
  code: {
    fontSize: "6rem",
    fontWeight: "bold",
    margin: 0,
    color: "#032840",
  },
  message: {
    fontSize: "2rem",
    margin: "1rem 0",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
    maxWidth: "400px",
  },
  button: {
    padding: "0.8rem 1.5rem",
    fontSize: ".75rem",
    fontWeight: "normal",
    color: "#fff",
    backgroundColor: "#43BA89",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};