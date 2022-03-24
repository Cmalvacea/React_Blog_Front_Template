
function Navbar(props) {
    return (
        <nav>
            {props.navlist.map((section) => 
            <a href='#'>{section}</a>)}
        </nav>
    )
}


export default Navbar