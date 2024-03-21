// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

// Note: the code returned from this function App() is NOT HTML.
// It looks very much like HTML, but it's actually a language called JSX.
// A translator/compiler called Babel takes the JSX code and turns it into HTML whenever 
// the file is saved.
// Also of note: notice the use of "className" rather than "class". Since "class" is reserved
// in Javascript, we cannot use class as though it were regular HTML. So we have to use className instead.
function App() {

  return (
    <div className="App">
      <Home />
      <Navbar />

    {/* Below is the original starter code. Keeping it for reference for now */}
    {/* 
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
      */}
    </div>
  );
}

export default App;
