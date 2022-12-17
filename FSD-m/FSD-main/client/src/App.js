import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import About from './Components/About';
// import Colname from './Components/Colname';
import Contact from './Components/Contact';
import FeedBack from './Components/FeedBack';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Payment from './Components/Payment';
import { Signup } from './Components/Signup';
import { StudentDetails } from './Components/StudentDetails';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <marquee className = "mar"> CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY, Hyderabad </marquee>
          <Routes>
          <Route exact path='/' element={ <Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Feedback' element={ <FeedBack />} />
          <Route exact path='/Login' element={<ProtectedRoute><Login /></ProtectedRoute> } />
          <Route exact path='/Contact' element={ <Contact />} />
          <Route exact path='/Payment' element={ <Payment />} />
          <Route exact path='/Signup' element={ <Signup/>} />
          <Route path = "/studentinfo" element = {<StudentDetails/>}/>
          </Routes>
      </Router>
    </div>
  );
}


export function ProtectedRoute(props){

  if(!localStorage.getItem(`CBIT`))
  {
    return props.children
  }else{
   return <Navigate to='/'/>
  }

}

export default App;
