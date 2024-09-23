import { useState, useEffect } from "react"
import { getPosts } from "../services/postServices"
import { getLikedPosts } from "../services/postServices"
import { Link } from "react-router-dom"
import { getUserLikedPost } from "../services/likesServices"
import { getAllPostsLikedByUser } from "../services/likesServices"
import { getAllLikes } from "../services/likesServices"
import { removeLike } from "../services/likesServices"

export const Favorites = ({ currentUser }) => {
    const [allLikes, setAllLikes] = useState([])
    const [shownPosts, setShownPosts] = useState([])

    useEffect(() => {
        getAllLikes().then(allLikes => {
            setAllLikes(allLikes)
        })
    }, [])

    useEffect(() => {
        getAllPostsLikedByUser(currentUser.id).then(allPostsArray => {
            setShownPosts(allPostsArray)
        })
    }, [allLikes])

    const handleUnlike = (postId) => {
        getUserLikedPost(postId, currentUser.id).then(userLike => {
            removeLike(userLike[0])
        }).then(() => {
            getAllLikes().then(allLikes => {
                setAllLikes(allLikes)
            })
        })
    }

    return (
        <div className='favorites'>
            {shownPosts && shownPosts.map(post => {
                return (
                <div key={post.id} className='post'>
                    <Link to={`/posts/${post.id}`}> <h2>{post ? post.post.title : 'why nothing?'}</h2> </Link>
                    <button className='btn-warning' onClick={() => handleUnlike(post.postId)}>Remove Favorite</button>
                </div>
                )
            })}
        </div>
    )
}