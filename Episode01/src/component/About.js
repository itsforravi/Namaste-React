import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h1>About</h1> 
            <h2>This is Namaster React </h2>
            
            {/* <User name={"Ravi Kumar Gupt(function)"}/> */}
            <UserClass name={"Ravi Kumar Gupt(class)"} location={"Gorakhpur (class)"}/>
            </div>

    );
};

export default About;