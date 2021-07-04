import { Link, Route } from 'wouter'
import './App.css';
import ListOfGifs from './components/ListOfGifs';


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/panda'>Gifs de Pandas</Link>
        <Link to='/gif/naruto'>Gifs de Naruto</Link>
        <Link to='/gif/garfield'>Gifs de Garfield</Link>
        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        />
      </section>
    </div>
  );
}

export default App;
