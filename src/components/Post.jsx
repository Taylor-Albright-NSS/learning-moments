
export const Post = ({post}) => {
    return (
        <div className="post">
            <h1 className='post-title'>
                {post.title}
            </h1>
            <p className='post-body'>
                {post.body}
            </p>
            <footer className='post-date'>
                {post.date}
            </footer>
        </div>
    )
}