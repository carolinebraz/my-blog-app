import './Post.css';

interface PostProps {
    title: String
    text: String
    author: String
}

function Post(props: PostProps) {
    return (
        <>
            <h2 className="title">{props.title}</h2>
            <p className="text"><i>{props.text}</i> &nbsp; {props.author}</p>
        </>
    )
}

export default Post