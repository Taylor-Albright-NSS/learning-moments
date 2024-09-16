export const getTopics = () => {
    return fetch("http://localhost:8088/posts?_expand=topic").then(res => res.json())
}

export const findTopic = (topicName) => {
    return fetch(`http://localhost:8088/topics?name=${topicName}`).then(res => res.json())
}