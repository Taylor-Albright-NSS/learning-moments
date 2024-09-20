import { useState, useEffect } from "react"
import { createPost } from "../services/postServices"
import { findTopic } from "../services/topicsServices"
import { Navigate, useNavigate } from "react-router-dom"

export const NewPost = ({ currentUser }) => {
    const [newPost, setNewPost] = useState({})
    const [topicId, setTopicId] = useState({})

    const navigate = useNavigate()

    const handleDropdown = (e) => {
        console.log(currentUser)
        let copy = {...newPost}
        copy.topic = e.target.value
        copy.userId = currentUser.id
        if (e.target.options.selectedIndex !== 0) {
            findTopic(e.target.value).then(topicObject => {
                setNewPost(copy)
                setTopicId(topicObject[0].id)
            })
        } else {
            findTopic(e.target.value).then(() => {
                setNewPost(copy)
                setTopicId(0)
            })
        }
    }
    const handleSavePost = (e) => {
        console.log(newPost)
        e.preventDefault()
        if (newPost.topicId === 0 || isNaN(newPost.topicId)) {

            window.alert('Please select a topic before saving your post.')
            return
        }
        createPost(newPost)
        navigate("/myposts")
    }

    useEffect(() => {
        let copy = {...newPost}
        copy.topicId = topicId
        setNewPost(copy)
    }, [topicId])

    return (
        <form className='profile' onSubmit={handleSavePost}>
            <fieldset>
                <div className='form-group'>
                    <label>Topic</label>
                    <select onChange={handleDropdown}>
                        <option>Choose a topic</option>
                        <option>Functions</option>
                        <option>Variables</option>
                        <option>React</option>
                        <option>Capstone</option>
                    </select>
                </div>
                <div className='form-group'>
                <label>Title</label>
                    <input required type='text' onChange={(e) => {
                        let copy = {...newPost}
                        copy.title = e.target.value
                        setNewPost(copy)
                        }}></input>
                </div>
                <div className='form-group'>
                    <label>Body</label>
                    <textarea required onChange={(e) => {
                        let copy = {...newPost}
                        copy.body = e.target.value
                        setNewPost(copy)
                    }}></textarea>
                </div>
                <div className='form-group'>
                    <button>Save Post</button>
                </div>
            </fieldset>
        </form>
    )
}