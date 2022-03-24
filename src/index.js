import React from 'react';
import ReactDOM from 'react-dom';
import AuthorSign from './Components/AuthorSign';
import Headline from './Components/Headline';
import Navbar from './Components/Navigation';


const SPL = ['Home','Recipes','About','Contact','Colaborate']
const PSL = [{
  Title: "Title 1",
  Content: "Content 1"
},
{
  Title: "Title 2",
  Content: "Content 2"
},
{
  Title: "Title 3",
  Content: "Content 3"
}]
const Titular = {
  Title: "React has been launched!"
}
const SecondaryHD = [
  {Title: "React News 1",
  Published: new Date().toDateString(),
  Author: "Christopher Malvacea"}
  ,{Title: "React News 1",
  Published: new Date().toDateString(),
  Author: "Christopher Malvacea"}]

function App() {
  return (
    <>
    <Navbar navlist={SPL}/>
    <Headline FirstHD={Titular} SHDS={SecondaryHD}/>
    <AuthorSign Author={"Christopher Malvacea"}/>
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
