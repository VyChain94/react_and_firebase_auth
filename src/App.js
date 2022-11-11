import React from "react";
import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Survey from "./components/Survey"
import { AuthContextProvider } from "./context/Context";
import ProtectedRoute from "./components/ProtectedRoute";

//why did I wrap all my routes with a provider?
function App() {
  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh" }}
        >
          <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/survey"
             element={
              // can't go to survey page unless you are a user
             <ProtectedRoute>
             <Survey/>
             </ProtectedRoute>}/>
          </Routes>
          </AuthContextProvider>
      </Container>
    </div>
  );
}

export default App;
