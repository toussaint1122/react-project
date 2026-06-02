import {useState} from "react";
import {Link} from "react-router-dom";
function SignUp(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSubmit = (e) => {
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all fields.");
            return;
          }
          if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
          }
        e.preventDefault();
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    }

    return(
      <>
      <div className="flex h-130 bg-gray-700 flex-col">
        <div className="flex pt-30 ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-78 pb-5 pt-5 bg-gray-600  content-center items-center w-100 mx-auto rounded-lg">
            <h1 className="flex justify-center items-center">Sign Up</h1>
            <input type="username" placeholder="Username" className="outline-none bg-gray-800  w-65 h-10 rounded-sm" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" className="outline-none bg-gray-800   w-65 h-10 rounded-sm" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="outline-none bg-gray-800 w-65 h-10 rounded-sm" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" className="outline-none bg-gray-800   w-65 h-10 rounded-sm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="submit" className="bg-blue-800 rounded-sm w-18 h-10 border border-blue-500 hover:bg-blue-600"><Link to="/signin">Sign Up</Link></button>
          </form>
        </div>
      </div>
      </>
    )
}
export default SignUp;