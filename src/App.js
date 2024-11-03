import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Welcomepage from './Pages/Dashboard/Asserts/Welcomepage/Welcomepage';
import Mainform from './Pages/Dashboard/Asserts/Formspage/Mainform';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Dashboard />}>
          <Route path="/welcome" element={ <Welcomepage />} />
          <Route path="/" element={ <Mainform />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
