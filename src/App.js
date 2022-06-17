import './App.css';
import Filter from './components/FilterSearch/Filter';
import Counter from './components/Counter/Counter';
import DisplayList from './components/DispayList/DisplayList';
import Checklist from './components/Checklist/Checklist';
import RestAPI from './components/RestAPI/RestAPI';
import ToDo from './components/ToDo/ToDo';
import Login from './components/Login/Login';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <ToDo />
      <Login />
      <Accordion />
      <Filter />
      <Counter/>
      <DisplayList />
      <Checklist />
      <RestAPI />
    </div>
  );
}

export default App;
