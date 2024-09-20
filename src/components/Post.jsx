import { Link } from "react-router-dom"


export const Post = ({post}) => {
    return (
        <div className="post">
            <h1 className='post-info'>{post.title}</h1>
            <p className='post-topic'>Topic: {post.topic.name}</p>
            <footer className='post-date'>Likes {post.likes.length}</footer>
        </div>
    )
}
