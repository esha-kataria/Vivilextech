// import './App.css';
import './Style.css';
// import ScriptTag from 'react-script-tag';
import Home from './components/Home';
import Index from './components/Index';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Portfolio from './components/Portfolio';
import Career from './components/Career';
import Contactus from './components/Contactus';
import Services from './components/Services';
import Softwaredevelopement from './components/Softwaredevelopement';
import Mobileapplication from './components/Mobileapplication';
import Itconsulting from './components/Itconsulting';
import Softwaretesting from './components/Softwaretesting';
import Corporatetraining from './components/Corporatetraining';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='body'>

          <Routes>
            {/* <ScriptTag isHydrating={true} type="text/javascript" src="../main.js"/> */}
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/Index' element={<Index />}/>
            <Route exact path='/Footer' element={<Footer />}/>
            <Route exact path='/Aboutus' element={<Aboutus />}/>
            <Route exact path='/Portfolio' element={<Portfolio />}/>
            <Route exact path='/Career' element={<Career />}/>
            <Route exact path='/Contactus' element={<Contactus />}/>
            <Route exact path='/Services' element={<Services />}/>
            <Route exact path='/Softwaredevelopement' element={<Softwaredevelopement />}/>
            <Route exact path='/Mobileapplication' element={<Mobileapplication />}/>
            <Route exact path='/Itconsulting' element={<Itconsulting />}/>
            <Route exact path='/Softwaretesting' element={<Softwaretesting />}/>
            <Route exact path='/Corporatetraining' element={<Corporatetraining />}/>
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
