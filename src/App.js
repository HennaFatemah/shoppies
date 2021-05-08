import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Hero}  />
        <Route path='/nomination' component={Main}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;