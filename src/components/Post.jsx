
export const Post = ({title}) => {
    return (
        <div className="post">
            <h1 className='post-title'>{title.title}</h1>
            <p className='post-topic'>Topic: {title.topic.name}</p>
            <footer className='post-date'>Likes {title.likes.length}</footer>
        </div>
    )
}
