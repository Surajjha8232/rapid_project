import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NewComponent from './NewComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NewComponent/>}/>
        {/* <Route path='/result' element={<Result/>}/> */}
        {/* <Route path='/main' element={<MainPage/>}/> */}
      </Routes>
    </Router>

  );
}

export default App;
