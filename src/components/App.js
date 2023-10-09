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
import { createBrowserRouter, ReactProvider, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about";
import Contact from "./contact";

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
  console.log("came to app")

  //Functional compoents is a simple JS function which returns jsx
  return (
    <div>
      {jsxHeading} {/* we can write any type of js code in the parenthesis */}
      {100 + 200}
      <h1>React Functional Component</h1>
      <Outlet /> {/**it takes the children routes and replaces it */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeadingComp />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <HeadingComp />, //Redirect to error comp if there is an error
  },
]);



export const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); //render method covert the heading object to a h1 tag and put it in the UI
root.render(<ReactProvider router={appRouter} />); // for componentd the syntax
root.render(<App/>)
