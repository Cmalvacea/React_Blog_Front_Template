export default function(props) {
    return (
        <footer>
            <div>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                    <li>Option 5</li>
                </ul>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                    <li>Option 5</li>
                </ul>
            </div>
            <div>
                <h3>Website made by <a href="https://cmalvacea.github.io/PersonalWebSite/" target={'_blank'}>{props.Author}</a></h3>
            </div>
        </footer>
    )
}


