
// const parent=React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"I am h1 tags")
//         ,React.createElement("h2",{},"I am h2 tags"),
//         React.createElement("h3",{},"I am h3 tags")])
// ,
// React.createElement("div",{id:"child2"},[
//     React.createElement("h1",{},"I am h1 tags")
//     ,React.createElement("h2",{},"I am h2 tags"),
//     React.createElement("h3",{},"I am h3 tags")])
// ]);

import React from "react";
// React.creatElement => ReactElement Js Object =>HtmlElemrnt(render)
import ReactDOM from "react-dom/client";


// const parent=React.createElement("div",{id:"parent"},
// [ 
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"Hey I am developer"),
//         React.createElement("h2",{},"I am h2 tags"),
//         React.createElement("h3",{},"I am h3 tags")]),

//         React.createElement("div",{id:"child2"},[
//             React.createElement("h1",{},"I am h1 tags"),
//             React.createElement("h2",{},"I am h2 tags"),
//             React.createElement("h3",{},"I am h3 tags")])
// ]


// );


// // const heading=React.createElement("h1",
// // {
// //     id:"heading"
// // },
// // "Hello World from React !");
    
// console.log(parent);//Object
 
// const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(parent);


// Eposide 03

const Title= (
    <h1 className="head" tabIndex="5">
        
        Namaster React using JSX
        </h1>
);



// component composition
    const Component=()=>(
        <div id="container">
           {Title}
         
            <h1 className="heading">Namaste React funnctional component</h1>
        </div>
    );
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Component/>);