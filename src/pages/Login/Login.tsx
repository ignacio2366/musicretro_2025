import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import "./Login.style.css";
import TextInput from "../../components/Inputs/TextInput/TextInput";
import BtnSubmit from "../../components/Button/BtnSubmit";
import { MusixServices } from "../../api/musix.services";

function Login() {
  const [formData, setFormData] = useState({
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
    console.log("Form submitted with data:", formData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MusixServices.getTopMusixArtists();
        console.log("Fetched data:", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
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
        </form>
      </Container>
    </>
  );
}

export default Login;
