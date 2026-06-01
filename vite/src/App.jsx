import Nav from "./Nav";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;