import { useState, useEffect } from "react"

export const TopicSearch = ({ allPosts, setFilteredPosts }) => {
    // const [topic, setTopic] = useState([])


    return (
        <div>
            <select onChange={(e) => {
                setFilteredPosts(
                    allPosts.filter(post => post.topic.name === e.target.value)
                )
                }}>
                <option>All Topics</option>
                <option>Functions</option>
                <option>React</option>
                <option>Variables</option>
                <option>Capstone</option>
            </select>
        </div>
    )
}