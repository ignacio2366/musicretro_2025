import { Container } from "@mui/material";
import "./Login.style.css";

function Login() {
  const path = import.meta.env.VITE_REACT_API_KEY;
  console.log("PHP URL:", path);

  return (
    <>
      <Container style={{ height: "100vh" }} className="flex-col-start">
        <h1>SAD</h1>
        <h1>SAD</h1>
        <h1>SAD</h1>
      </Container>
    </>
  );
}

export default Login;
