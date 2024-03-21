
// You may have noticed that variables declared inside a component do NOT change onscreen. For example,
// the variable title = "Webpage Name" is inserted into the h1 tags.
// But if we changed the title value, the title on the webpage wouldn't change.
// To fix this, we need to make the variables "reactive" to changes. That's where the useState hook comes in.
import { useState } from 'react'


const Home = () => {

    // We will need to make some changes to this title variable if we are to dynamically change the value
    //const title = "Webpage Name";
    const [title, setTitle] = useState('Ping');
    // The above declares a pair-array where the first element is the variable, and the second is the function name for setting it.
    // useState('') makes this possible

    // Reactive value for number of clicks done on the alternate button
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        console.log("Button clicked!");
        // When the button is clicked, let's alternate the title between "Webpage" and "Website". 
        switch(title) {
            case 'Ping': setTitle('Pong'); break;
            case 'Pong': setTitle('Ping'); break;
            default: setTitle('Ping'); 
        }
    }
    const handleClickAlt = (n) => {
        console.log(`n is ${n}`);
        setClicks(clicks + 1);
    }

    return (
        <div className="home">
            <h1>{ title }</h1>
            <button onClick={handleClick}>Change Page Name</button>
            
            {/* Note: to pass arguments to a function from button onClick, you 
            can write it as an anonymous function () => { ... } where ... is the code
            you want to run, including but not limited to the function with desired arguments.
            You may not need the curly braces if the code you write is just a function ex:
                () => handleClickAlt(n)
            */}
            <button onClick={() => {
                console.log("Below is handleClickAlt(n) where n is a random number between 0 and 10.");
                handleClickAlt(Math.random() * 10);
            }}>
                Increment N
            </button>
            <p>N = { clicks }.</p>
        </div>
    );
}
 
export default Home;