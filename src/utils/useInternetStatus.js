import {useState, useEffect} from 'react';

const useInternetStatus =() =>{
    const [internetStatus, setInternetstatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline",() => {
            setInternetstatus(false);
        });
        window.addEventListener("online",()=>{
            setInternetstatus(true);
        });

        // window.addEventListener
    },[])

    return internetStatus;
}

export default useInternetStatus;