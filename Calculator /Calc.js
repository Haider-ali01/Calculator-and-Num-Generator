document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');
    
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.getAttribute('data-value');
            
            if (!isNaN(value) || value === '.') {
                currentInput += value;
                display.innerText = currentInput;
            } else if (button.classList.contains('operator')) {
                if (currentInput === '' && value === '-') {
                    currentInput = '-';
                    display.innerText = currentInput;
                } else if (currentInput !== '') {
                    firstValue = currentInput;
                    operator = value;
                    currentInput = '';
                }
            }
        });
    });
    
    clearButton.addEventListener('click', function() {
        currentInput = '';
        operator = '';
        firstValue = '';
        display.innerText = '0';
    });
    
    equalsButton.addEventListener('click', function() {
        if (firstValue !== '' && currentInput !== '') {
            const secondValue = currentInput;
            let result;
            
            switch (operator) {
                case '+':
                    result = parseFloat(firstValue) + parseFloat(secondValue);
                    break;
                case '-':
                    result = parseFloat(firstValue) - parseFloat(secondValue);
                    break;
                case '*':
                    result = parseFloat(firstValue) * parseFloat(secondValue);
                    break;
                case '/':
                    result = parseFloat(firstValue) / parseFloat(secondValue);
                    break;
            }
            
            display.innerText = result;
            firstValue = result;
            currentInput = '';
        }
    });
});
