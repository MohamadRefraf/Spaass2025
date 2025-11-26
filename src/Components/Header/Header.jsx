import { useState } from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
function Header(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
      <header>
        <h1>My Website</h1>
        <nav className='nav-bar'>
          <Link to="/"> Home </Link>  |{" "}
          <Link to="/about"> About </Link>  |{" "}
          <Link to="/contact">Contact</Link>
           <div>
           {isLoggedIn ? (
        <>
          <button className='btn' onClick={() => {setIsLoggedIn(false)
             console.log("Logged In Value", isLoggedIn);}}>Logout</button>
        </>
      ) : (
        <>
          <button className='btn' onClick={() => {setIsLoggedIn(true)
             console.log("Logged In Value", isLoggedIn);} }>Login</button>
        </>
      )}
       </div> 
        </nav>
      </header>
    );
}
export default Header;