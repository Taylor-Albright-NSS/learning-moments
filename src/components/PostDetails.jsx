import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPostDetails } from "../services/postServices"
import { updateLikes } from "../services/likesServices"

export const PostDetails = ({ currentUser }) => {
    const { postId } = useParams()
    const [currentPost, setCurrentPost] = useState({})

    const handleLikes = (event) => {
        event.preventDefault()
        const like = {
            userId: currentUser.id,
            postId: currentPost.id
        }
        updateLikes(like).then(() => {
            getPostDetails(postId).then(post => {
                setCurrentPost(post[0])
            })        
        })
    }

    useEffect(() => {
        getPostDetails(postId).then(post => {
            setCurrentPost(post[0])
        })
    }, [postId])


    return (
        <div className='post-details'>
            <h2>{ currentPost ? currentPost.title : ''}</h2>
            <h3>{ currentPost ? currentPost.user?.name : ''}</h3>
            <h3>{ currentPost ? currentPost.topic?.name : ''}</h3>
            <h3>{ currentPost ? currentPost.date : ''}</h3>
            <p>{ currentPost ? currentPost.body : ''}</p>
            <span>Likes: { currentPost ? currentPost.likes?.length : ''}</span>
            {currentUser.id === currentPost.userId ?
            //TODO
            //Edit your post button should navigate to the Edit Post view once the
            //Edit Post view is created
            <button>Edit your post</button> :
            <button onClick={handleLikes}>Like this post!</button>
             }
        </div>
    )
}