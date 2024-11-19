// import './App.css';
import { useState } from 'react';
import Board from './components/Board';
import Navbar from './components/Navbar';
function App() {
  const [dropdownSelection, setDropdownSelection] = useState({
    grouping: "status", // Default grouping
    ordering: "priority", // Default ordering
  });
  const handleDropdownChange = (type, value) => {
    setDropdownSelection((prev) => ({ ...prev, [type]: value }));
  };


  return (
    <div className="App">
    <Navbar onDropdownChange={handleDropdownChange} />
    <Board dropdownSelection={dropdownSelection} />
    </div>
  );
}

export default App;
