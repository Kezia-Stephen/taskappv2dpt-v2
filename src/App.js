
import './App.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import Tasks from './Pages/Tasks';

function App() {
  return (
 
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/tasks" element={<Tasks/>}></Route>
      </Routes>
      
      </BrowserRouter>

  );
}

export default App;
