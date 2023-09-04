import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){
        console.log("Parent Render");
        return(
            <div>
                <h1>About Class Component</h1> 
                <h2>This is Namaster React </h2>
                
                {/* <User name={"Ravi Kumar Gupt(function)"}/> */}
                <UserClass name={"Ravi Kumar Gupt(class)"} location={"Gorakhpur (class)"}/>
                <UserClass name={"Ravi Kumar (class)"} location={"Agra "}/>
                </div>
    
        );
        
    }
    /*
-Parent Constractor
-Parent render   
     -Ravi Constructor
     -Ravi render
     -Ravi ComponentDidMount
     

     -Ravi Constructor
     -Ravi render
     -Ravi ComponentDidMount
     
-Parent ComponentDidMount


    */
}



export default About;