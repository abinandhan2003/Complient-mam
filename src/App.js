import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Welcomepage from './Pages/Dashboard/Asserts/Welcomepage/Welcomepage';
import Mainform from './Pages/Dashboard/Asserts/Formspage/Mainform';
import Formprocess from './Pages/Dashboard/Asserts/FormProcess/Formprocess';
import Adminctrl from './Pages/Dashboard/Asserts/FormProcess/Asserts/Admin/Adminctrl';
import Newrequest from './Pages/Dashboard/Asserts/FormProcess/Asserts/Newrequest/Newrequest';
import ProcessingComp from './Pages/Dashboard/Asserts/FormProcess/Asserts/ProcessingComplient/ProcessingComp';
import CompletedComp from './Pages/Dashboard/Asserts/FormProcess/Asserts/CompletedComplient/CompletedComp';
import ProcessUpdate from './Pages/Dashboard/Asserts/FormProcess/Asserts/ProcessingComplient/Assert/ProcessUpdate/ProcessUpdate';
import CompleteStatus from './Pages/Dashboard/Asserts/FormProcess/Asserts/CompletedComplient/CompleteStatus/CompleteStatus';
import Profile from './Pages/Dashboard/Asserts/Profile/Profile';
import Password from './Pages/Dashboard/Asserts/Password/Password';
import Subscription from './Pages/Dashboard/Asserts/Subscription/Subscription';
import Qrgenerate from './Pages/Dashboard/Asserts/FormProcess/Asserts/Qr/Qrgenerate';
import LoginPage from './Pages/Login/Login';
import SignUpPage from './Pages/Signup/Signup';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="login" element={ <LoginPage /> }></Route> 
        <Route path="signup" element={ <SignUpPage />}></Route> 


        <Route path="/" element={<Dashboard />}>
          <Route path="/welcome" element={ <Welcomepage />} />
          <Route path="/" element={ <Mainform />} />
          <Route path="/process" element={ <Formprocess />} />
          <Route path="/process/admin" element={ <Adminctrl />} />
          <Route path="/process/newrequest" element={ <Newrequest />} />
          <Route path="/process/processingcomp" element={ <ProcessingComp />} />
          <Route path="/process/completed" element={ <CompletedComp />} />
          <Route path="/process/processingcomp/update" element={ <ProcessUpdate />} />
          <Route path="/process/processingcomp/completed" element={ <CompleteStatus />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/password" element={ <Password />} />
          <Route path="/subscription" element={ <Subscription />} />
          <Route path="/qr" element={ <Qrgenerate />} />
          

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
