export const getPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=topic&_embed=likes").then(res => res.json())
}

export const getPostTopics = () => {
    return fetch("http://localhost:8088/posts?_expand=topic").then(res => res.json())
}
export const getPostLikes = () => {
    return fetch("http://localhost:8088/likes?_expand=post").then(res => res.json())
}
