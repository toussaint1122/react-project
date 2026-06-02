import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Navigation from "./Nav";
import Home from "./Home";
import ForgotPassword from "./Forgotpassword";
import Message from "./Message";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </>
  );
}

export default App;
