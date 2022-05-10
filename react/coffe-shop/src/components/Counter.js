import {useState} from "react";

function Counter(){

    let now = new Date().toString()

    const[count, setCount] = useState(0);
    const[date, setDate] = useState(now);

    const handleClick = () =>{

        setCount(count + 1)
        setDate(now);

    }

return (

    <div>

        <h2>Contador: {count}</h2>
        <button onClick ={handleClick}>Click</button>

    </div>

)

}

export default Counter;