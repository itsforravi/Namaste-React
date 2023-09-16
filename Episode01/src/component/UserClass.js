import React from "react";
import User from "./User";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"DUMMY",
                Location:"DEFAULT ",
                avatar_url:"http://dummy.photo.com"
            }
        };
         console.log(this.props.name+"Child Constructor");
    }
   async componentDidMount(){
this.timer=setInterval(()=>{
    // console.log("Namaste React OP")
},1000);


     //console.log("Child Component Did Mount");
// const data=await fetch("https://api.github.com/users/therealravi8808");
// const json=await data.json();
// console.log(json);
// this.setState({
//   userInfo:json,  
// });
// console.log(json);



}

componentDidUpdate(preProps,prevState){
    if(this.state.count !=prevState.count){

    }
    //console.log("Component Did Update");
}
componentWillUnmount(){
    clearInterval(this.timer);
    //console.log("ComponentWillUnmount");
}

    render(){

// const {name,location}=this.props;
//console.log("Child Render");

const {name,location,avatar_url}=this.state.userInfo;

        return (<div className="user-card">
            <img src={avatar_url}/>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@itsforravi</h4>
      
          </div>
          );
    }
}
export default UserClass;

/**
 * constructor(dummy)
 * Render (dummy)
 * <html Dummy>
 * component Did Mount
 * <API Called>
 * <this.setState>->state variable is updated
 * 
 * 
 * --UPDATE
 *      render(API data)
 *      <HTML (new API data)
 *         component Did Update
 *          
 */