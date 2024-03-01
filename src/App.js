import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Trending from './Trending';

function App() {
  return (
    <div className=' w-10/12 absolute left-1/2 -translate-x-1/2 font-Poppins'>
      <Navbar />
      <Trending />
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-red-500">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
