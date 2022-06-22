import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Counter from './components/Counter';
import ItemScreen from './components/ItemScreen';
import ClassProps from './components/ClassProps';

function App() {
  const identity = {
    alias:"Ironman",
    name:"Jatin"
  }
  return (
    <>
    {<ClassProps identity={identity}/>}
    {/* <ItemScreen/> */}
    {/* <Counter/> */}
    {/* <FirstComponent/>
    <SecondComponent/> */}
    </>
  );
}

export default App;