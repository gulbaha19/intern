import { Button, styled, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Auth } from "../context/Auth";
type LoginType = {
  email: string;
  password: string;
};
const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;
const Form = styled("form")`
  display: flex;
  flex-direction: column;
`;

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(Auth);
  const users = useSelector((state) => state);
  console.log(users, "jgu");

  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    sendUserData(data);
  };
  function sendUserData(userData: LoginType) {
    axios
      .post(`https://reqres.in/api/register`, {
        email: userData.email,
        password: userData.password,
        returnSecureToken: userData,
      })
      .then((data) => {
        // console.log(data.data.idToken)
        setToken(data.data.idToken);
        localStorage.setItem("idToken", data.data.idToken);
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
        {token ? "AUTHORISED" : "NOT AUTHORISED"}
      </Form>
    </Wrapper>
  );
};
