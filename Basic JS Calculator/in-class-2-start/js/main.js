// this is our javascript file.
console.log(" javascript Calculator linked ")
// 1. Create a function name "getElementValue" that will get a value from an element.
// this function will take one parameter "selector"
// which will select the elements.
// this function will return the innerText of an element.

function getElementValue(selector){
    let element = document.querySelector(selector)
    return element.innerHTML
}


// 2. create function name "multiply" that will take two numbers as parameters
// and multiply them together. 
// parameter named: firstValue, secondValue
// reference here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
// and return the result

function multiply(firstValue , secondValue){

   return(firstValue*secondValue)

}

// 3. create a function "updateResult" that will calculate the result.
// a. this will get the values from step 1 and parse the values
// using the parseInt function reference here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
// b. mutliply the values from "a."
// update the element with the innerText of "We don't know" 

function updateResult(){
    
    //select value 1 and value 2 using the function and convert to int
    let value1 = parseInt(getElementValue("#first-value"))
    let value2 = parseInt(getElementValue("#second-value"))

    //call the multiply function , pass value 1 and value 2 and store in variable "result"
    let result = multiply(value1 ,value2)

    //update the result selector with the value of multiplication
    let updresult = document.getElementById("result")
    updresult.innerHTML = result
    
}

// 4. Call the function "updateResult" on the page load.

updateResult()