export const getAllLikes = () => {
    return fetch("http://localhost:8088/likes?_expand=post").then(res => res.json())
}

export const getPostLikes = () => {
    return fetch("http://localhost:8088/likes?_expand=post").then(res => res.json())
}

export const getUserLikedPost = (postId, userId) => {
    return fetch(`http://localhost:8088/likes?postId=${postId}&userId=${userId}`).then(res => res.json())
}

export const updateLikes = (like) => {
    return fetch('http://localhost:8088/likes', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(like),
    })
}

export const getAllPostsLikedByUser = (userId) => {
    return fetch(`http://localhost:8088/likes?userId=${userId}&_expand=post`).then(res => res.json())
}

export const doesLikeAlreadyExist = () => {

}

export const removeLike = (userLike) => {
    return fetch(`http://localhost:8088/likes/${userLike.id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLike),
    })
}