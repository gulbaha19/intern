import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Protected } from "./components/Protected";
import { Auth } from "./context/Auth";
import { LogIn } from "./pages/LogIn";
import NotFound from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import { RegisterPage } from "./pages/RegisterPage";
import { UsersPage } from "./pages/UsersPage";

function App() {
  const [token, setToken] = useState<string>(localStorage.getItem("idToken") || "");

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
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Auth.Provider>
  );
}

export default App;
