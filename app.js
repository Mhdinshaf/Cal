 const display = document.getElementById('display');

 function appendToDisplay(input) {
           
            if(display.value === '0' || display.value === 'Error') {
                display.value = input;
            } else {
                display.value += input;
            }
        }
        
        // Append number to the display
        function appendNumber(num) {
           
            if (display.value === '0') {
                display.value = num;
            } else {
                display.value += num;
            }
        }

        // Append operator
        function appendOperator(operator) {
            const lastChar = display.value.slice(-1);
           
            if (['+', '-', '*', '/'].includes(lastChar)) {
                display.value = display.value.slice(0, -1) + operator;
            } else {
                display.value += operator;
            }
        }

        // Add Decimal Point
        function appendDot() {
          
            const parts = display.value.split(/[\+\-\*\/]/);
            const currentPart = parts[parts.length - 1];
            
            if (!currentPart.includes('.')) {
                display.value += '.';
            }
        }

        // Clear Display (AC)
        function clearDisplay() {
            display.value = '0';
        }

        // Calculate Result (=)
        function calculate() {
            try {
                
                let result = eval(display.value);
                
                
                if (result === Infinity || isNaN(result)) {
                    display.value = "Error";
                } else {
                    display.value = result;
                }
            } catch (error) {
                display.value = 'Error';
            }
        }

        // Toggle Positive/Negative (+/-)
        function toggleSign() {
            if (display.value === '0' || display.value === 'Error') return;
            
            
            try {
                let currentValue = eval(display.value);
                display.value = currentValue * -1;
            } catch {
                
            }
        }

        // Percentage (%)
        function percentage() {
            if (display.value === '0' || display.value === 'Error') return;
            try {
                let currentValue = eval(display.value);
                display.value = currentValue / 100;
            } catch {
                display.value = 'Error';
            }
        }