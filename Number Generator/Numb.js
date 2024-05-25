document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate');
    const resultDisplay = document.getElementById('result');

    generateButton.addEventListener('click', function() {
        const min = parseInt(document.getElementById('min').value);
        const max = parseInt(document.getElementById('max').value);

        if (isNaN(min) || isNaN(max) || min >= max) {
            resultDisplay.innerText = 'Please enter valid numbers with Min < Max.';
            return;
        }

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resultDisplay.innerText = `Random Number: ${randomNumber}`;
    });
});
