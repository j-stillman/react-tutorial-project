// import logo from './logo.svg';
import './App.css';

// Note: the code returned from this function App() is NOT HTML.
// It looks very much like HTML, but it's actually a language called JSX.
// A translator/compiler called Babel takes the JSX code and turns it into HTML whenever 
// the file is saved.
// Also of note: notice the use of "className" rather than "class". Since "class" is reserved
// in Javascript, we cannot use class as though it were regular HTML. So we have to use className instead.
function App() {

  // You can write regular old Javascript outside the return statements of these functions
  const title = "Welcome to the Website.";
  const myNumber = 45;

  return (
    <div className="App">

      <h1>
        { title }
      </h1>
      <p> Displaying an array of [1, 2, 4, 8] looks like: { [1, 2, 4, 8] } </p>
      <p> Displaying a random number between 0 and 10 looks like: { Math.random() * 10 } </p>
      <p> Displaying a number looks like: { myNumber }</p>

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
