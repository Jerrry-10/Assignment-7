import logo from './logo.svg';
import './App.css';
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';
import Appcomponent from './components/Appcomponent';

function App() {
  return (
    <div className="App">
      <h1>Enter your gif</h1>    
      <Appcomponent/> 
      <SearchField/>
    </div>
  );
}

export default App;
