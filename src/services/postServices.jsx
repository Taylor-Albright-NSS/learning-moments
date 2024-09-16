export const getPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=topic&_embed=likes").then(res => res.json())
}

export const getPostTopics = () => {
    return fetch("http://localhost:8088/posts?_expand=topic").then(res => res.json())
}
export const getPostLikes = () => {
    return fetch("http://localhost:8088/likes?_expand=post").then(res => res.json())
}

export const getPostDetails = (id) => {
    return fetch(`http://localhost:8088/posts?id=${id}&_expand=user&_expand=topic&_embed=likes`).then(res => res.json())
}

export const getPostAuthor = (id) => {
    return fetch(`http://localhost:8088/posts?_expand=user&userId=${id}`).then(res => res.json())
}

export const createPost = (post) => {
    return fetch("http://localhost:8088/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((res) => res.json())
  }
export const deleteMyPost = (post) => {
    console.log(post, 'This post has been deleted')
    return fetch(`http://localhost:8088/posts/${post.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((res) => res.json())
  }