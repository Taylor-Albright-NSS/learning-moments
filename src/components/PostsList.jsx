import { useState, useEffect } from "react"
import { Post } from "./Post"
import { getPosts } from "../services/postServices"
import { TopicSearch } from "./TopicSearch"
import { NavBar } from "./NavBar"
import { Link } from "react-router-dom"

export const PostsList = () => {
    const [shownPosts, setShownPosts] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    
    useEffect(() => {
        getPosts().then(postsArray => {
            setAllPosts(postsArray)
        })
    }, [])

    useEffect(() => {
        if (filteredPosts[0]) {
            setShownPosts(filteredPosts)
        } else {
            getPosts().then(postsArray => {
                setShownPosts(postsArray)
            })        
        }
    }, [filteredPosts])


    return (
        <>
        <div className='post-view'>
            <div className="post-list">
                {shownPosts.map(post => {
                    return <Link to ={`/posts/${post.id}`}><Post post={post} key={post.id}/></Link>
                })}
            </div>
            <div className="topic-search">
                <TopicSearch allPosts={allPosts} setFilteredPosts={setFilteredPosts} />
            </div>
        </div>
        </>
    )
}