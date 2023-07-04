import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Authentication from './Authentication/Authentication';
import Home from './Components/General/Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/auth' element={<Authentication/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
