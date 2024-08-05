//using debugger keyword can also allow you to see the flow of input values 
//which is being stored in variables in javaScript.
    function performOperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
            // Perform the operation
            let additionResult = add(num1, num2);
            let multiplicationResult = multiply(num1, num2);
            let divisionResult = divide(num1, num2);
            // Display the results
            displayResult(`Addition: ${additionResult}, Multiplication: ${multiplicationResult}, Division: ${divisionResult}`);
        }else{
            displayResult('Please enter valid numbers');
        }
    }
    
    function add(a, b) {
        // Introduce a debugger statement to pause execution
        debugger;
        return a + b;
    }
    
    function multiply(a, b) {
        // Introduce a debugger statement to pause execution
        debugger;
        return a * b;
    }
    
    function divide(a, b) {
        // Introduce a debugger statement to pause execution
        debugger;
        if (b === 0) {
            return 'Division by zero error';
        }
        return a / b;
    }
    
    function displayResult(result) {
        // Display the result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.textContent = `The result is: ${result}`;
    }
            