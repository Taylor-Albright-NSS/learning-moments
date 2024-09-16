export const getPostLikes = () => {
    return fetch("http://localhost:8088/likes?_expand=post").then(res => res.json())
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