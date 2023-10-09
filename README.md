# namste react

# parcel

- Dev build
- host the app to the local server
- HMR - Hot Module Rplaceement -- it autmatically refreshes the app when saved
- File watching algorithm - written in c++
- Catching - faster builds
- Image optimization
- Minification for production
- buldles the files
- compress the code
- Consistent hashing
- code silting
- differential budling - support older browsers
- Dignostics
- error handling
- https support
- Tree shaking - remove unused code for you
- different dev and prod bundles

# browsers list

- we can configure in which bowser our app should work

# JSX

- JS syntax which is used to create react elements

- transpilling is doen by parcel
  means as jsx is not understood by js engine parcel convert the jsx to react/js engine undersytasndable
- In jsx the attributes are given in camel case

# babel

JS compiler it transpiles jsx to code that js engine and react will understand

- parcel has babel for transpiling

# components

- class based components
- functional components

# component composition

- returning a component from another component

# config driven UI

- Controlling the ui based on the backend data

# key prop

- it is used to make react identify a particular lement in the list otherwise it will render all the elements

# react hooks

Normal js utility functions
useState()
useEffect()

# Reconciliation algorithm (React fibre)

- Virtual Dom - Representation of actual DOM
- Compares the old virtual DOM and new virtual DOM and update the actual DOM //div algorithm

const arr=useState()
const [list,setList]=arr; //it is valid and it works

# Monolith architechture

different services are run and same language should be used to develop a service like using java for all sevices and whole services will be installed verytime

# Micro service architechture

each service can be installed separately and different languages can be used to development a service

# shimmer ui

represents the actual ui until the ui is loaded , instead of showing a loading text or loading icon we can use shimmer effect so that the user thinks that the data is there and how fast it is loading
it is like a fake data instead of showing an empty page

# when ever state variable updates react will trigger reconciliation process

# virtual

virtual representation of jsx actual DOM

# React router DOM

latest version

- useRouteError hook

const err=useRouteError()
err.status and so on ...

# Types of routing

- server side routing
- client side routing

# useParams hook to get the params passed in the url

Link from react router DOM to navigate without refreshing the whole page , when <a></a> tag is used the whole page refreshes

behinds the scenes Link comp uses <a></a> tag as browser understands anchor tag

# Class component

A js class which extends to React.Component and have a render method which returns piece of jsx

React.Component is given by react which react to know it is a class component

# Render phase in life cycle

- constructor
- render

# Commit phase

- React updates the DOM
- runs the componentDidMount

First react completes render phase and then go to commit phase

Initial render in mounting phase will hapen with a dummy data

# Mounting phase

- constructor
- render
- componentDidMount

# Updating

- render
- componentDidUpdate

# Umounting

- componentWillUnmount

When we set a time interval in componentDidMount if a page even when we go to another page the timer will still create and run

For this we need to clear the interval in the componentWillUnmount

# modularity

- breaking the code in to small small modules

# Chunking (or) Code Splitting (or) Dynamic Bundling (or) Lazy loading (or) On demand loading

bundling means the code in our project is combined in to a single file and while bundling the size of the file may be very large and our app may become slow

we can make a part of our code in to a separate bundle without including it in the main bundle js file during production

const Grocery=lazy(()=>import('../components/grocery)) // creating separate bundle for grocery
import {lazy,Suspence} from 'react';

Use Suspense in order to make react identify the component

<Suspence><Grocery/></Suspense>

# HOC

A component which takes a component as an argument and returns another component

const PromotedRest=withLablePromoted(RestaurentCard)

const withLablePromoted=(RestaurentCard)=>{
return (props)=>{
return (
<div></div>
<RestaurentCard {...props}/>
)
}
}

<PromotedRest resData={}/>


# useContext

const UserContext=createContext({
  login:""
})

const data=useContext(UserContext) //  in functional components


<UserContext.consumer></UserContext.consumer> // for class based components
