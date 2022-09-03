import { Login } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Protected } from "./components/Protected";
import { Auth } from "./context/Auth";
import { LogIn } from "./pages/LogIn";
import { Profile } from "./pages/Profile";
import { UsersPage } from "./pages/UsersPage";

function App() {
  // const rrr = useContext(Auth);
  const [token, setToken] = useState<string>(localStorage.getItem("idToken") || "");
  console.log("tokan ", token);

  return (
    <Auth.Provider value={{ token, setToken }}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Protected isLoggedIn={token !== "" ? true : false}>
                <UsersPage />
              </Protected>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/users"
            element={
              <Protected isLoggedIn={token !== "" ? true : false}>
                <Navbar />
                <UsersPage />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected isLoggedIn={token !== "" ? true : false}>
                <Navbar />
                <Profile />
              </Protected>
            }
          />
        </Routes>
      </div>
    </Auth.Provider>
  );
}

export default App;
