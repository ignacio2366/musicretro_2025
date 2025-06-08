import { Container } from "@mui/material";
import { useState } from "react";
import "./Login.style.css";
import TextInput from "../../components/Inputs/TextInput/TextInput";
import BtnSubmit from "../../components/Button/BtnSubmit";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/dashboard`);
  };
  return (
    <>
      <Container className="container">
        <form onSubmit={handleSubmit} className="login-form flex-col-start ">
          <h1>Login</h1>
          <TextInput
            placeholder="Enter your email"
            label="Email"
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
          <TextInput
            placeholder="Enter your Password"
            label="Pasword"
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
          <BtnSubmit label="Login" onClick={() => handleSubmit} />

          <span style={{ color: "white", textAlign: "center" }}>
            No Backend for Login Services, Just Fill the Form
          </span>
        </form>
        <form action="" className="login-form flex-col-start ">
          <h1>Create</h1>
          <TextInput
            placeholder="Enter your email"
            label="Email"
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
          <TextInput
            placeholder="Enter your Password"
            label="Pasword"
            type="text"
            name="password"
            onChange={handleChange}
            required
          />
          <BtnSubmit label="Create" onClick={() => handleSubmit} />

          <span style={{ color: "white", textAlign: "center" }}>
            Only MusixMatch Integration
          </span>
        </form>
      </Container>
    </>
  );
}

export default Login;
