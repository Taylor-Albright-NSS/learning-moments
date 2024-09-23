import { useState, useEffect } from "react"
import { getUserProfileInfo } from "../services/userService"
import { getPostAuthor } from "../services/postServices"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Profile = ({ currentUser }) => {
    const [userInfo, setUserInfo] = useState({})
    const [numberOfPosts, setNumberOfPosts] = useState({})
    const { userId } = useParams()
    const navigate = useNavigate()

    const handleEditProfileButton = () => {

    }

    useEffect(() => {
        getUserProfileInfo(userId).then(user => {
            setUserInfo(user)
        })
    }, [])

    useEffect(() => {
        getPostAuthor(userId).then(postAndAuthor => {
            setNumberOfPosts(postAndAuthor)
            console.log(userId, ' user ID')
            console.log(currentUser.id, ' currentUser.id')
        })
    }, [])

    return (
        <div className='profile-details-main'>
            <div className='profile'>
                <h2>{userInfo && userInfo.name}</h2>
                <div>Cohort: {userInfo && userInfo.cohort}</div>
                <div>Number of posts: {numberOfPosts && numberOfPosts.length}</div>
                {currentUser.id === parseInt(userId) && <button className='btn-secondary' onClick={() => {navigate('../editprofile')}}>Edit Profile</button>}
            </div>
        </div>
    )
}