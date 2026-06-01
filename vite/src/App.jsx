import Nav from "./Nav";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
function App(){
  <>
  <Nav/>
<Routes>
  <Route path="/login" element={<Login/>}/>
</Routes>
  </>
 

}
export default App;