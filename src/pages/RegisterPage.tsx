import { Button, styled, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Auth } from "../context/Auth";
import { Form, LoginType, Wrapper } from "./LogIn";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(Auth);
  const users = useSelector((state) => state);
  function nav() {
    navigate("/users");
  }
  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    localStorage.setItem("email", data.email);
    sendUserData(data);
  };
  function sendUserData(userData: LoginType) {
    axios
      .post(`https://reqres.in/api/register`, {
        email: userData.email,
        password: userData.password,
      })
      .then((data) => {
        nav();
        setToken(data.data.token);
        localStorage.setItem("idToken", data.data.token);
      })
      .catch((error) => {
        console.log({ ...error });
        alert(`Failed to Authorize. Error message: ${error.response.data.error.message}`);
      });
  }
  return (
    <Wrapper>
      <Form onSubmit={validateForm}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          type="email"
          label="Email"
          placeholder="Enter email"
          required
        />
        <br />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="small"
          type="password"
          label="Password"
          placeholder="Enter password"
          required
        />
        <br />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
        <p>
          If you already have an account
          <span style={{ color: "red", marginLeft: "5px" , cursor:'pointer'}} onClick={() => navigate("/")}>
            Log in here
          </span>
        </p>
      </Form>
    </Wrapper>
  );
};
