// A BlogList is a paragraph followed by a list of blog posts. We will be using useState hooks to dynamically
// change the blog posts, this way we don't have to hard code each div every single time.

import { useState } from 'react';

//const BlogList = (props) => {             // One way of receiving props. Another more efficient way is shown below
const BlogList = ({blogs, title}) => {

    // Using this more efficient way of receiving props, we do not need to declare them as variables 
    //const blogs = props.blogs;
    //const title = props.title;

    // In order to display each of these blog post previews, we need to use the map function.
    // blogs.map has an array as the caller, and uses an anonymous function. It seems similar to 
    // the enhanced for-loop in c++, where we declare a variable to represent each value as we iterate over a set.
    // Compare and contrast the following: 
    //      for(int n : array) { ... }
    //      blogs.map((blog) => ( ... ) )
    // They aren't entirely the same though. It seems like the parentheses indicate that this mapping just 
    // returns some HTML/JSX for each "blog" belonging to the array blogs.
    return ( 
        <div className="BlogList">
            <h2>{ title }</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={ blog.id }>
                        <h3>{ blog.title }</h3>
                        <p>{ blog.body }</p>
                        <p>By { blog.author }</p>
                    </div>
                ))
            }
        </div> 
    );

}

export default BlogList;