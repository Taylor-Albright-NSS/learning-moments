

export const NavBar = ({allPosts, showAllPosts}) => {
    return (
        <div className='nav-bar'>
            <ul className='nav-ul'>
                <li className='nav-li' onClick={() => {showAllPosts(allPosts)}}>All Posts</li>
                <li className='nav-li'>My Posts</li>
                <li className='nav-li'>Favorites</li>
                <li className='nav-li'>New Post</li>
                <li className='nav-li'>User Profile</li>
                <li className='nav-li'>Logout</li>
            </ul>
        </div>
    )
}