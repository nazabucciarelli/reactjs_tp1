import './App.css';
import Dialog from './components/Dialog';
import Toast from './components/Toast';
import './components/Toast.css'

// Exercise 1
function Saludar() {
  return (
    <p> Welcome! </p>
  )
}

// Exercise 2
function SaludarPersonalizado(props) {
  const {name, lastname} = props;
  return (
    <p> Welcome {lastname}, {name} </p>
  )
}

function App(){
  return (
    <div>
        <Saludar/>
        <SaludarPersonalizado name="Nazareno" lastname="Bucciarelli"/>
        <Toast header="Header Title" message="This is a toast and was so hard to make it work properly..." time="5000"/>
        <Dialog header="Dialog header title" message="Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim 
        consequat sem, blandit integer posuere elementum lobortis ante a auctor massa non, duis feugiat leo tempor laoreet
         rutrum venenatis ac suscipit. Sapien condimentum rhoncus per eleifend facilisis sagittis nam accumsan sociis, 
         scelerisque conubia mi sodales iaculis viverra pharetra aptent, ridiculus quam blandit arcu pretium felis tellus nisl.
          Dis sem turpis mus velit hac sapien a cras, id sodales per interdum imperdiet massa taciti, erat purus platea laoreet
           mauris aptent ridiculus."/>
    </div>
  )
}

export default App