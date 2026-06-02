import { House,Contact,Mails} from "lucide-react";
import { Link } from "react-router-dom";
function Nav() {
    return(
<>
<div className="flex items-center content-center  text-blue-500 gap-100 bg-gray-800 p-5">
    <h1>Future focus</h1>
    <div className="flex gap-10 content-center items-center " >
   <a href="" className="flex items-center gap-2">
    <House />
    Home
   </a>
    <a href="" className="flex items-center gap-2">
     <Contact />
     Contact
    </a>
    <a href="" className="flex items-center gap-2">
     <Mails />
     Testimoniars
    </a>
<Link to="/signin" className="flex items-center gap-2">
    <House />
    Sign In
   </Link>
    </div>
  
</div>
</>
    )
    
}
export default Nav;