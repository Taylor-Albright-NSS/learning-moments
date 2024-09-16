import { Link } from "react-router-dom"
import { deleteMyPost } from "../services/postServices"

const handleDeletePost = (post, refreshPosts) => {
    let deleteConfirm = confirm("Are you sure you wish to delete this post?")
    if (deleteConfirm) {
        deleteMyPost(post).then(() => {
            refreshPosts()
        })
        
    }
}

export const MyPost = ({post, refreshPosts}) => {
    return (
        <div className="post">
            <Link to={`/posts/${post.id}`}><h1 className='post-title'>{post.title}test</h1></Link>
            {/* <p className='post-topic'>Topic: {post.topic.name}</p>
            <footer className='post-date'>Likes {post.likes.length}</footer> */}
            <button onClick={() => handleDeletePost(post, refreshPosts)}>Delete Post</button>
        </div>
    )
}