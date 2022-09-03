import { Login } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Protected } from "./components/Protected";
import { Auth } from "./context/Auth";
import { LogIn } from "./pages/LogIn";
import { UsersPage } from "./pages/UsersPage";

function App() {
  // const rrr = useContext(Auth);
  const [token, setToken] = useState<string>(localStorage.getItem("idToken") || "");
  console.log("tokan ", token);

  return (
    <Auth.Provider value={{ token, setToken }}>
      <div className="App">
        <Navbar />

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
                <UsersPage />
              </Protected>
            }
          />
        </Routes>
      </div>
    </Auth.Provider>
  );
}

export default App;
