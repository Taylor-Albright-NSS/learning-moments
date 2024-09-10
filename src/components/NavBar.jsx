import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
            <ul className='navbar'>
                <li className='navbar-item'>
                    <Link to="/allposts" className='navbar-link'>All Posts</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/allposts" className='navbar-link'>My Posts</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/allposts" className='navbar-link'>Favorites</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/allposts" className='navbar-link'>New Post</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/allposts" className='navbar-link'>User Profile</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/allposts" className='navbar-link'>Logout</Link>
                </li>
            </ul>
    )
}