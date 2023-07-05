import { Routes, Route } from 'react-router';
import './App.css';
import './assets/css/main.css';
import Homepage from './pages/Home';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path='/employee-list' element={<EmployeeList />} />
    </Routes>
    </div>
  );
}

export default App;