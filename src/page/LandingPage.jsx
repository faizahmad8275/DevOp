import { useState } from "react";
import Child from "./Child";

function LandingPage(){
    console.log("Inside Parent");
    const [counter, setCounter] = useState(0);
    const [search,setSearch] = useState("");

    const handleButton = ()=>{
        setCounter(counter+1);
    };

    return(
        <div>
            <h1>Landing Page</h1>
            <button onClick={handleButton}>Click Me</button>
            <input type="text"onChange={(e)=> setSearch(e.target.value)} />
            <h5>{counter}</h5>
            <Child search={search}/>
        </div>
    )
}

export default LandingPage;