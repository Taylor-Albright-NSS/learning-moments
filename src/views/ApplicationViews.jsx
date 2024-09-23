import { Route, Routes, Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { PostsList } from "../components/PostsList"
import { useState, useEffect } from "react"
import { PostDetails } from "../components/PostDetails"
import { Welcome } from "../components/Welcome"
import { NewPost } from "../components/NewPost"
import { MyPosts } from "../components/MyPosts"
import { EditPost } from "../components/EditPost"
import { EditProfile } from "../components/EditProfile"
import { Favorites } from "../components/Favorites"
import { Profile } from "../components/Profile"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        const localLearningUser = localStorage.getItem("learning_user")
        const learningUserObject = JSON.parse(localLearningUser)
        setCurrentUser(learningUserObject)
        console.log(currentUser)
      }, [])

    return (
        <Routes className="app">
            <Route path="/" element={<><NavBar currentUser={currentUser} /><Outlet /></>}>
                <Route index element={<Welcome />} />

                <Route path='posts'>
                    <Route index element={<PostsList/>} />
                    <Route path=':postId' element={<PostDetails currentUser={currentUser} />} />
                </Route>

                <Route path='myposts'>
                    <Route index element={<MyPosts currentUser={currentUser} />} />
                </Route>

                <Route path="newpost" element={<NewPost currentUser={currentUser} />} />
                <Route path="myposts/edit/:postId" element={<EditPost currentUser={currentUser} />} />
                <Route path="favorites" element={<Favorites currentUser={currentUser} />} />
                <Route path="profile/:userId" element={<Profile currentUser={currentUser} />} />
                <Route path="editprofile" element={<EditProfile currentUser={currentUser} />} />

            </Route>
        </Routes>
    )
}