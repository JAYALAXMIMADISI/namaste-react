/**
 * <div id='parent'>
 * <div id='child'>
 * <h1>
 * I am an h1 tag
 * </h1>
 * <h2>
 * I am an h2 tag
 * </h2>
 * </div>
 * </div>
 *
 *
 */

import React from "react"; //import indicates that the package is importing from node modules
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2  tag"),
  ]) //Keep in an array for siblings
);

const jsxHeading = <h1>Jsx h1 element</h1>;

//React element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
); //obj is the attributes and React.createElement gives an js object

const HeadingComp = () => {
  //Functional compoents is a simple JS function which returns jsx
  return (
    <div>
      {jsxHeading} {/* we can write any type of js code in the parenthesis */}
      {100+200}
      <h1>React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); //render method covert the heading object to a h1 tag and put it in the UI
root.render(<HeadingComp />); // for componentd the syntax
