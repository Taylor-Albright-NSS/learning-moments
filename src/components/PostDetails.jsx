import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPostDetails } from "../services/postServices"
import { updateLikes } from "../services/likesServices"
import { useNavigate } from "react-router-dom"

export const PostDetails = ({ currentUser }) => {
    const { postId } = useParams()
    const [currentPost, setCurrentPost] = useState({})

    const navigate = useNavigate()

    const handleLikes = (event) => {
        console.log(currentPost)
        if (currentPost.likes.find(like => like.userId === currentUser.id)) {
            window.alert('You have already liked this post!')
            return
        }
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
        navigate(`/favorites`)
    }

    const editPost = () => {
        navigate(`/myposts/edit/${postId}`)
    }

    useEffect(() => {
        getPostDetails(postId).then(post => {
            setCurrentPost(post[0])
            console.log(post)
        })
    }, [postId])


    return (
        <div className='post-details-main'>
            <div className='single-post'>
                <h2 className='post-info'>{ currentPost ? currentPost.title : ''}</h2>
                <h3 className='post-info'>{ currentPost ? currentPost.topic?.name : ''}</h3>
                <h3 className='post-info'>{ currentPost ? currentPost.date : ''}</h3>
                <p>{ currentPost ? currentPost.body : ''}</p>
                <h3 className='post-info'>By: { currentPost ? currentPost.user?.name : ''}</h3>

                <span>Likes: { currentPost ? currentPost.likes?.length : ''}</span>
                {currentUser.id === currentPost.userId ?
                //TODO
                //Edit your post button should navigate to the Edit Post view once the
                //Edit Post view is created
                <button className='btn-primary' onClick={() => editPost(currentPost)}>Edit your post</button> :
                <button className='btn-secondary' onClick={handleLikes}>Like this post!</button>
                }
            </div>
        </div>
    )
}