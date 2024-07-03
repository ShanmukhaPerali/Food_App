import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    const { name, location } = props;
    return(
        <div className="User">
            <h3>Name: {name}</h3>
            <h4>{location}</h4>
            <h4>contact: Shanmkuha_Perali</h4>
            <h3>Count : {count}</h3>

            <h3>Count2: {count2}</h3>
        </div>
    )
}

export default User;