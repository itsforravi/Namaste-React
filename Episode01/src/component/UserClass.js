import React from "react";
import User from "./User";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2,
        };
        console.log(this.props.name+"Child Constructor");
    }
componentDidMount(){
    console.log(this.props.name+"Child Component Did Mount");
}

    render(){

const {name,location}=this.props;
const{count,count2}=this.state;
console.log("Child Render");

        return (<div className="user-card">
            <h1>Count:{count}</h1>
            {/* <h1>Count2:{count2}</h1> */}
            <button onClick={()=>{
                this.setState({
                   count:this.state.count+1,
                });

            }} >Count Increase</button>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@itsforravi</h4>
        <h5>Contact:@itsforravi/twitter</h5>
          </div>
          );
    }
}
export default UserClass;