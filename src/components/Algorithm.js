import {useState} from "react";
import { useRef } from "react";

export default function Algorithm () {

//Set useState for input & validate number
    const [validateInput, setValidateInput] = useState("");
    const [number, setNumber] = useState(0);
    //input data stores inside x
    const x = useRef();

    const handleInputChange = (e) => {
        setNumber(e.target.value);   
    }


    const validCard = (e) => {
        e.preventDefault();
        console.log(x.current.value);

        let numArray = [];
        numArray.push(x.current.value);
    
        let num = Array.from(String(numArray), Number);
        console.log(num);

        //Loop through every other number and double it
        for(let i = 0; i < num.length; i+= 2) {
        num[i] *= 2 
    } 


    //Add numbers together
    let sum = 0;
    num.forEach((ele)=> {
        sum+= ele;
    })

    setNumber(sum);

    // console.log(sum);
}

//If divisible by 10, it's valid, if it's not, it's invalid
const validate = () => {
    if(number % 10 === 0) {
        setValidateInput("valid card")
    }
    else if (number % 10 !== 0){
        setValidateInput("invalid card")   
    }

    console.log(number);
}

    return (
        <div>  {/* validate card function onSubmit */}
            <form className="validate-container" onSubmit={validCard}>
                <input type="text" onChange={handleInputChange} placeholder="Enter card number here" ref={x} className="input-field"/>
                <input type="submit" className="input-btn"/>
                <br/>
                <button onClick={validate} className="validate-btn">Validate</button>
                <h5 style={{color:"white", fontSize:"1.5rem"}}>{validateInput}</h5>
            </form>
        </div>
    )
    }