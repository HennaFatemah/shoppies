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
        <Route exact path='/shoppies' component={Hero}  />
        <Route path='/shoppies/nomination' component={Main}  />
      </Switch>
    </BrowserRouter>
  );
}
// https://hennafatemah.github.io/shoppies/
// https://hennafatemah.github.io/shoppies/nomination

export default App;