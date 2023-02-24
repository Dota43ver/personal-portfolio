import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner'
import {Projects} from './components/Projects'
import {Skills} from './components/Skills'



function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <Skills/>
     <Projects/>
    </div>
  );
}

export default App;
