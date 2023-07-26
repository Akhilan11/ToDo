import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Authentication from './Authentication/Authentication';
import Home from './Components/General/Home';
import View from './Components/User/View';
import ReadMore from './Components/User/ReadMore';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/auth' element={<Authentication/>}/>
            <Route path='/view' element={<View/>} />
            <Route path='/view/task' element={<ReadMore/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
