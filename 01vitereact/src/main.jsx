//import React from 'react' // React is not required in the latest versions of React with JSX
import * as React from 'react' // If still want to use React, this is the way to import it
//import ReactDOM from 'react-dom/client' // ReactDOM is used to render React elements

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    );
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Click here to visit Google',
// }
// const reactElement = React.createElement(           // React.createElement is not used in current version of React
//     'a',
//     {href: 'https://www.google.com', target: '_blank'},         
//     'Click here to visit Google'
// )
const reactElement = (
  <a href="https://www.google.com" target="_blank">
    Click here to visit Google
  </a>
)

createRoot(document.getElementById('root')).render(
  
    //MyApp()  // not correct way in jsx
    //<MyApp/>
    reactElement
  
)