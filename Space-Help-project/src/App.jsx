import { Switch, Route } from 'wouter';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import Footer from './components/footer/Footer';
import Challenge from './components/challenge/Challenge';
import Progress from './components/progess/Progress';
import Tips from './components/tips/Tips';
import Instructions from './components/instructions/instructions';
import './App.css';
import './style.css';

function App() {

  return (
    <>
     <Header />
     <Switch>
     <Route path='/' component={Welcome}/>
     <Route path='/Challenge/:day' component={Challenge}/>
     <Route path='/Progress'  component={Progress}/>
     <Route path='/Instructions' component={Instructions} />
     <Route path='/Tips' component={Tips} />
     </Switch>
     <Footer />

    </>
  )
}

export default App
