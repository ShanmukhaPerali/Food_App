import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

class AboutUs extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent's Constructor");
    }

    componentDidMount(){
        console.log("Parent component Mounted");
    }

    render(){
        console.log("Parent render");
        return(
            <>
                <h1>Welcome to AboutUs class Component Page</h1>
                {/* <User name={"Shanmukha (Functional)"} location={"Vijayawada"}/> */}
    
                <UserClass />
            </>
        );
    }
}

export default AboutUs;