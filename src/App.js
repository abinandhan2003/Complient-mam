import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Dashboard />}>

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
