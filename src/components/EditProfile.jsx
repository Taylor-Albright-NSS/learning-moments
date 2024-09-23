import { saveProfileEdits } from "../services/userService"
import { getUserProfileInfo } from "../services/userService"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const EditProfile = ({ currentUser }) => {
    const [userInfo, setUserInfo] = useState({})
    const [userEdits, setUserEdits] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getUserProfileInfo(currentUser.id).then(userInfo => {
            setUserInfo(userInfo)
            setUserEdits(userInfo)
        })
    }, [])

    const handleSaveEdits = (e) => {
        e.preventDefault()
        saveProfileEdits(userEdits)
        console.log(userEdits)
        console.log(userInfo)
        navigate(`/profile/${userEdits.id}`)
    }

    return (
        <form className='edit-profile-form'>
            <h5>Edit Name: </h5>
            <fieldset className='edit-profile-fieldset'>
                <div>
                    <input type='text' 
                    placeholder={userInfo ? userInfo.name : ''} 
                    value={userEdits && userEdits.name} 
                    onChange={(event) => {
                        let copy = {...userInfo}
                        copy.name = event.target.value
                        setUserEdits(copy)
                        console.log(copy)
                        console.log(userEdits)
                    }} />
                </div>
            </fieldset>
            <fieldset>
               <h5>Edit Cohort: </h5>
                <div>
                <input type='text' 
                    placeholder={userInfo ? userInfo.cohort : ''} 
                    value={userEdits && userEdits.cohort} 
                    onChange={(event) => {
                        let copy = {...userInfo}
                        copy.cohort = event.target.value
                        setUserEdits(copy)
                        console.log(copy)
                        console.log(userEdits)
                    }} />                
                    </div>
                <button className='btn-secondary' onClick={handleSaveEdits}>Save Changes</button>
            </fieldset>
        </form>
    )
}