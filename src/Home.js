
import BlogList from './BlogList';

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

    // List of blog posts that we will use and reuse around the project
    // Note: We will be passing this data (the blogs array) into the child component
    // <BlogList /> which has been added to the bottom of the HTML/JSX this function returns.
    // In order to do this, we will use something called props, the purpose of which is just that.
    // Syntax of props is the following: 
    //      <BlogList blogs={ blogs } />
    // The prop must be "received" inside the child component as well. This is done simply by
    // declaring the parameter "props" inside the component declaration. In the case of the BlogList component,
    // it will look like the following: 
    //      const BlogList = (props) => {
    //          // ...
    //          const blogs = props.blogs;
    //          // ...
    //      } 
    // At which point we will be able to use the blogs array inside BlogList.
    const [blogs, setBlogs] = useState([
        { title: "New Website!", body: "lorem ipsum...", author: "je", id: 1 },
        { title: "Welcome Party", body: "dolor sit...", author: "re", id: 2 },
        { title: "React Tutorials", body: "amet, consectetur...", author: "mi", id: 3 },
        { title: "Gamedev Portfolio", body: "adipiscing elit...", author: "ah", id: 4 }
    ]);

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

            {/* We will add a BlogList object below which I have turned into its own component */}
            <BlogList blogs={ blogs } title={ "vvv Blog Posts vvv" } />
        </div>
    );
}
 
export default Home;