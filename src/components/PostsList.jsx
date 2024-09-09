import { useState, useEffect } from "react"
import { getPosts } from "../services/postServices"
import { Post } from "./Post"

export const PostsList = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        getPosts().then(postsArray => {
            setAllPosts(postsArray)
        })
    }, [])

    return (
        <div className="post-list">
            {allPosts.map(post => {
                return <Post post={post} key={post.id}/>
            })}
        </div>
    )
}