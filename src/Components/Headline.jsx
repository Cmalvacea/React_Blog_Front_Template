import Post_Thumbnail from "../Micro_Components/Post_Thumbnail"


export default function Headline(props) {
    const FirstHD = props.FirstHD
    const SecondaryHDS = props.SHDS
    return(
        <>
        <div className="Post_Renderer">
            <Post_Thumbnail PostsList={SecondaryHDS}/>
        </div>
        </>
    )
}