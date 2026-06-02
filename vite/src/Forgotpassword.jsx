
import { useState } from "react";
function ForgotPassword(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return(
<>
<div className="flex h-130 bg-gray-700 flex-col items-center justify-center">
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-gray-600 p-5 content-center items-center pt-20 w-100 mx-auto rounded-lg">
        <input type="email" placeholder="Enter your email" className="border-2 rounded-sm outline-none w-65 h-10 items-center flex" required />
       {isLoggedIn && <p className="text-green-500">A password reset link has been sent to your email!</p>}
        <button onClick={() => setIsLoggedIn(true)} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Reset Password
        </button>
    </form>
</div>
</>
    )
}
export default ForgotPassword;