import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name:"default",
                location:"default", 
            }
        };

        // console.log("Child Constructor");
    }
    
    async componentDidMount(){
        // console.log("Child Component Mounted");
        const data = await fetch("https://api.github.com/users/ShanmukhaPerali");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
    }


    render(){
        const {name, location} = this.state.userInfo;
        // console.log("Child Render");

        return(
            <div className="User">
                <h3>Name: {name}</h3>
                <h4>{location}</h4>
                <h5>Contact: Shanmukha_Perali</h5>
            </div>
        )
    }
}

export default UserClass;