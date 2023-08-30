import './App.css';
import Dialog from './components/dialog/Dialog';
import Logo from './components/logo/Logo';
import Toast from './components/toast/Toast';
import './components/toast/Toast.css';
import Saludar from './components/saludar/Saludar';
import SaludarPersonalizado from './components/saludar_personalizado/SaludarPersonalizado';
import Clock from './components/clock/Clock';

function App() {
  return (
    <div>
      <Logo />
      <Saludar />
      <SaludarPersonalizado name="Nazareno" lastname="Bucciarelli" />
      <Toast header="Header Title" message="This is a toast and was so hard to make it work properly..." time="5000" />
      <Dialog header="Dialog header title" message="Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim 
        consequat sem, blandit integer posuere elementum lobortis ante a auctor massa non, duis feugiat leo tempor laoreet
         rutrum venenatis ac suscipit. Sapien condimentum rhoncus per eleifend facilisis sagittis nam accumsan sociis, 
         scelerisque conubia mi sodales iaculis viverra pharetra aptent, ridiculus quam blandit arcu pretium felis tellus nisl.
          Dis sem turpis mus velit hac sapien a cras, id sodales per interdum imperdiet massa taciti, erat purus platea laoreet
           mauris aptent ridiculus."/>
      <Clock/>
    </div>
  )
}

export default App