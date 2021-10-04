
import { BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Course from './components/Course/Course';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <Route path='/course'>
          <Course></Course>
         </Route>
         <Route path='/about'>
            <About></About>
         </Route>
         <Route path='/contact'>
           <Contact></Contact>
         </Route>
         <Route path='*'>
            <NotFound></NotFound>
         </Route>
         <Route></Route>
         <Route></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
