import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Upperbase from "./Components/UpperBody";
import "./Components/navbar.css"
import { useEffect } from 'react';
// import Below from './Components/day3/below';

function App() {
  useEffect(() => {
    document.title = "Toggl Track"
 }, []);
  return (
    <div className="App">
    <div style={{position:"fixed"}}> <Navbar/> </div>
    <div>
      <Upperbase/>
    </div>
    
    </div>
  );
}

export default App;
