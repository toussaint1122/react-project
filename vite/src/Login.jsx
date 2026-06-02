import {useState} from "react";
import { Link } from "react-router-dom";
function Login(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    }
    return(
        <>
        <div className="h-130 bg-gray-700 flex items-center justify-center">
        <form className="flex flex-col gap-5 bg-gray-600 p-5 content-center items-center pt-20 w-100 mx-auto rounded-lg" onSubmit={handleSubmit}>
            <div className="">
                <input onChange={(e) => setEmail(e.target.value)} placeholder="email" className="border-2 rounded-sm outline-none w-65 h-10 items-center flex" type="email" id="email" name="email" required />
            </div>
            <div>
                <input onChange={(e) => setPassword(e.target.value)} placeholder="password" className="border-2 rounded-sm outline-none w-65 h-10 items-center flex" type="password" id="password" name="password" required />
           <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
            </Link>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{setIsLoggedIn(true)}}>
               <Link to="/home">Login</Link>
            </button>
            If you don't have an account, please <Link to="/signup" className="text-blue-500" >sign up</Link>.
                {isLoggedIn && <p className="text-green-500">Login successful!</p>}
        </form>
        </div>
        </>
        
    )
}
export default Login;