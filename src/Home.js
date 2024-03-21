const Home = () => {


    const handleClick = () => {
        console.log("Button clicked!");
    }
    const handleClickAlt = (n) => {
        console.log(`n is ${n}`);
    }

    const title = "Webpage Name";

    return (
        <div className="home">
            <h1>{ title }</h1>
            <button onClick={handleClick}>Clickable Button</button>
            
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
                Alternate Clickable Button
            </button>
        </div>
    );
}
 
export default Home;