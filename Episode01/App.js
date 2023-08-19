import React from "react";
import ReactDOM from "react-dom/client";

const Title= (
    <h1 className="head" tabIndex="1">
        
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