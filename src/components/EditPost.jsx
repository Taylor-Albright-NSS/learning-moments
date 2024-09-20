import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostDetails } from "../services/postServices"
import { editMyPost } from "../services/postServices"
import { useNavigate } from "react-router-dom"

export const EditPost = ({ currentUser }) => {

    const { postId } = useParams()
    const navigate = useNavigate()
    const [currentPost, setCurrentPost] = useState({ title: '' })

    const handleSaveEdits = (e) => {
        e.preventDefault()
        let newDate = new Date()
        let date = `${newDate.getMonth()}/${newDate.getDate() + 1}/${newDate.getFullYear()}`
        currentPost.editedDate = date
        delete currentPost.likes
        delete currentPost.user
        console.log(currentPost)
        editMyPost(currentPost).then(() => {
            navigate('/myposts')
        })
    }

    useEffect(() => {
        getPostDetails(postId).then(post => {
            const postObject = post[0]
            postObject.topic = post[0].topic.name
            console.log(postObject)
            setCurrentPost(postObject)
        }).then(() => {console.log(currentPost)})
    }, [postId])


    return (
        <div className='post-details'>
            <form>
            <fieldset>
                <div className='form-group'>
                    <label>Edit Title: </label>
                    <input type='text' required className='form-control' value={currentPost ? currentPost.title : ''} onChange={(event) => {
                        let copy = {...currentPost}
                        copy.title = event.target.value
                        setCurrentPost(copy)
                        console.log(copy)
                    }} />
                </div>
            </fieldset>
            <fieldset>
                <div className='form-group'>
                    <label>Edit Topic: </label>
                    <select required className='form-control' value={currentPost ? currentPost.topic : ''} onChange={(event) => {
                        let copy = {...currentPost}
                        copy.topic = event.target.value
                        copy.topicId = event.target.options.selectedIndex + 1
                        setCurrentPost(copy)
                        console.log(copy)
                    }}>
                        <option>Functions</option>
                        <option>Variables</option>
                        <option>React</option>
                        <option>Capstone</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className='form-group'>
                    <label>Edit Body: </label>
                    <textarea required className='form-control' value={currentPost ? currentPost.body : ''} onChange={(event) => {
                        let copy = {...currentPost}
                        copy.body = event.target.value
                        setCurrentPost(copy)
                        console.log(currentPost)

                    }} />
                </div>
            </fieldset>
            <button onClick={handleSaveEdits}>Save Edits</button>
            </form>
            
            <span>Likes: { currentPost ? currentPost.likes?.length : ''}</span>
        </div>
    )
}