
import BlogList from './BlogList';

// You may have noticed that variables declared inside a component do NOT change onscreen. For example,
// the variable title = "Webpage Name" is inserted into the h1 tags.
// But if we changed the title value, the title on the webpage wouldn't change.
// To fix this, we need to make the variables "reactive" to changes. That's where the useState hook comes in.
// In addition, there is also the useEffect hook. This is a function run every time the page is re-rendered.
// In most cases, the page is re-rendered whenever the state changes (e.g. when we delete a blog post)
import { useState, useEffect } from 'react'


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

    // Method to delete a blog post by id. This will be passed into BlogList as a prop
    const blogDelete = (id) => {
        console.log(`Blog id ${id} is to be deleted.`);

        // To "delete" a blog post by id, we will use the filter method to create a copy of 
        // the blogs array WITHOUT the blog with the passed-in id.
        const newBlogs = blogs.filter((blog) => (blog.id != id));

        // Following that, we use the useState method to set the blogs array to the copy.
        // (This seems kinda slow though considering we have to do a lot of copying.
        // What if we had millions of posts? Wouldn't this take forever?)
        // I suppose it just comes down to using the right data structure, as simple
        // arrays aren't known for being easy to remove elements from.
        setBlogs(newBlogs);

    }

    // useEffect method is shown below. This is run every time the page is re-rendered
    // Unlike useState, useEffect does not return anything. We simply pass in an anonymous function to run
    useEffect(() => {
        console.log("useEffect() called.");
        
        // You also have access to the state variables inside the useEffect() method.
        // But BE CAREFUL, because if you change the state inside the useEffect somehow, you
        // may trigger an infinite loop. For example, if you add another blog post here, then 
        // it will have to re-render as the state has been changed. This will call useEffect, 
        // which will add ANOTHER blog post, causing a re-render, triggering useEffect again, and so on.
        console.log(`title set to ${title}.`);

    }, [title]);

    // The array above (inside the useEffect arguments) is a dependency array. When empty, it will 
    // cause the useEffect function to only be run on the first render. Afterwards, it won't run because
    // there are no dependencies (i.e. state changes in which useEffect() SHOULD run.) 
    // To add a dependency, just add the name of the useState you want to "watch". If we put the webpage title
    // into the dependency, then it will only run useEffect when the title changes (i.e. when you click the 
    // "Change Name" button)

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
            <BlogList blogs={ blogs } title={ "vvv Blog Posts vvv" } handleDelete={ blogDelete } />
        </div>
    );
}
 
export default Home;