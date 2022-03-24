import React from "react";


export default class PostRender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {positive: true}
    }
    render() {
        const Positive = this.state.positive
        const Posts = this.props.postlist
        return (
            <>
            {Posts.map((post) => <div className="Post_Preview">
                <div>

                </div>
                <article>
                    <h3>{post.Title}</h3>
                    <p>{post.Content}</p>
                </article>
            </div>)}
            </>
        )
    }
}

