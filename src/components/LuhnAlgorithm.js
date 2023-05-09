/*Write a function validCardthat takes a number as an argument and returns true for a valid number and false for an invalid number.*/

import {useState, useEffect} from 'react';

export default function LuhnAlgorithm () {

  // Declare state variables
  const [creditCardNum, setCreditCardNum] = useState('');
  const [validation, setValidation] = useState(null);

  useEffect(() => {
    
  }, []);

  // Update card numbers' current value
  const handleCreditCardNumChange = (e) => {
    setCreditCardNum(e.target.value);
  }


  // Show if card is valid or invalid when user clicks submit button
  const handleSubmit = (e) => {
    // Prevent page from loading so validation msg can be seen
    e.preventDefault();
    // Update user input and test if the numbers entered are valid or invalid
    setValidation(validCard(creditCardNum));
  }

  const validCard = (creditCardNum) => {
    // Convert each credit card string into actual numbers and place in a new array
    const numArray = Array.from(String(creditCardNum), Number);
    // Track the total sum of numbers
    let sum = 0;

    //Loop through the array: starting with the next to last digit and continuing with every other digit going back to the beginning of the card number 
    for(let i = numArray.length - 2; i >= 0; i -=2) {

      // double the digit
      let doubleNum = numArray[i] * 2;

      // For Luhn algo, all numbers can be 9 or less than 9. So, doubled number more than 9? Subtract 9 from it!
      if (doubleNum > 9) {
        doubleNum -= 9;
      }

      //Ensure all number (doubled & not doubled) are included in the array of numbers!
      numArray[i] = doubleNum;
    }

    // Add every number together in the array & save it in the tracker variable (sum)
    numArray.forEach(function(num) {
      sum += num;
    });

    // If the credit card number users enter into the input field is divisble by 10, then it returns true, i.e. the card is valid. If not, it's invalid.
    return sum % 10 === 0;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleCreditCardNumChange} className="input-field" placeholder='Enter Credit Card Number'/>
        <br/>
        <button type='submit' className="validate-btn">Validate</button>
      </form>
      {validation === true && <p style={{color:"#99d98c", fontSize:"1.5rem"}}>Credit Card is Valid</p> }{validation === false && <p style={{color:"#ff5a5f", fontSize:"1.5rem"}}>Credit Card is Invalid</p>}
    </div>
  )

}
