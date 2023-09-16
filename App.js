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

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {},
    "I am an h1 tag"),React.createElement("h2", {},
    "I am an h2  tag")]
  ), //Keep in an array for siblings
); 

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
); //obj is the attributes and React.createElement gives an js object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //render method covert the heading object to a h1 tag and put it in the UI
