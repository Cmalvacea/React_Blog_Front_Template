export default function(props) {
    const Posts = props.PostsList
    return(
        <>
        {Posts.map((post) => <div className="Post_Preview">
            <div className="Post_Thumbnail">
                {post.Image}
            </div>
            <div className="Post_Details">
                <a href="#" className="Post_Title">{post.Title}</a>
                <div>
                    <p>{post.Published}</p>
                   <p>{post.Author}</p>
                </div>
            </div>
        </div>)}
        </>
    )
}