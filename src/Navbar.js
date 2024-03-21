
// This template was created using the Simple React Snippets extension:
//      type "sfc" followed by the tab key. sfc stands for Stateless Functional Component.
// Note: a component function can be an arrow function OR a regular function. It doesn't really matter.
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Navbar</h1>
            <div className="links">
                <a href="/">regular item</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>item with style</a>
            </div>
        </nav>
    );
}

// Some more notes: notice the second a href tag. We have added "inline styling" to it, where a javascript object
// has been passed into the style field. There are two curly braces because the first set denotes we are referencing
// some object/value outside the JSX portion. The second set of braces denote a javascript object.
// We also must use quotes when referencing these objects, and the CSS-style hyphens aren't allowed. Instead 
// we must use camelCasing. Instead of background-color, we use backgroundColor. Instead of border-radius we use borderRadius.
// It also seems that Inline Styling overrides any styling done in the index.css file.

 
export default Navbar;