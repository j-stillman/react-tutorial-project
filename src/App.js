// import logo from './logo.svg';

// Import the CSS file for the app. The App.css file below is applied to the entire root element in the page.
// It essentially inserts it all as one big style tag if you inspect the webpage. 
//import './App.css';
// For now however, we will just use index.css and apply it to the whole page.

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
      <Navbar />
      <Home />

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
