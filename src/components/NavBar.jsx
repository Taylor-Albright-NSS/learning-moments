import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import '../index.css'

export const NavBar = () => {
    const navigate = useNavigate()
    return (
            <ul className='navbar'>
                <li className='navbar-item'>
                    <Link to="/posts" className='navbar-link'>All Posts</Link>
                </li>
                 <li className='navbar-item'>
                    <Link to="/myposts" className='navbar-link'>My Posts</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/favorites" className='navbar-link'>Favorites</Link>
                </li> 
                <li className='navbar-item'>
                    <Link to="/newpost" className='navbar-link'>New Post</Link>
                </li>
                {/* <li className='navbar-item'>
                    <Link to="/posts" className='navbar-link'>User Profile</Link>
                </li> */}
                {localStorage.getItem("learning_user") ? (
                    <li>
                        <Link
                        to=""
                        onClick={() => {
                            localStorage.removeItem("learning_user")
                            navigate("/login", { replace: true })
                        }}
                        >
                        Logout
                        </Link>
                    </li>
                    ) : (
                    ""
                    )}
            </ul>
    )
}