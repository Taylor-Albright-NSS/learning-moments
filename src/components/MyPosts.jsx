import { Post } from "./Post"
import { useState, useEffect } from "react"
import { getPosts } from "../services/postServices"
import { MyPost } from "./MyPost"

export const MyPosts = ({ currentUser }) => {
    const [allPosts, setAllPosts] = useState([])
    const [userPosts, setUserPosts] = useState([])

    const refreshPosts = () => {
        getPosts().then(postsArray => {
            setAllPosts(postsArray)
        })
    }

    useEffect(() => {
        getPosts().then(postsArray => {
            setAllPosts(postsArray)
        })
    }, [])

    useEffect(() => {
        getPosts().then(postsArray => {
            let filteredPosts = postsArray.filter(post => post.userId === currentUser.id)
            setUserPosts(filteredPosts)
            console.log(userPosts)
        })
    }, [allPosts])

    console.log(userPosts)
    console.log(allPosts)

    return (
        <div>
            {userPosts && userPosts.map(post => {
                return <MyPost post={post} refreshPosts={refreshPosts} key={post.id}/>
            })}
        </div>
    )
}