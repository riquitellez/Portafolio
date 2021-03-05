const num1 = parseInt(document.getElementById('number1').value);
        const num2 = parseInt(document.getElementById('number2').value);
        document.getElementById('btn').addEventListener('click', validate1);

        function readInput() {
            const input = document.getElementById('number1').value;
            document.getElementById('empty').innerHTML = input;
        }

        function validate1() {
            const div = document.getElementById('empty');
            const numInput = document.getElementById('number1').value;

            if (numInput <= 0) {
                document.getElementById('empty').innerHTML =
                    "The number you entered is not valid, please enter a positive integer.";
            } else {
                div.innerHTML = 'Total: ' + sum(numInput);
            }


        }

        function sum(num) {
            let sum = 0;
            for (i = 1; i <= num; i++) {
                sum += i;
                console.log(sum);
                document.getElementById('empty').innerHTML = sum;
                
            }
            return sum;
        }
        document.getElementById('btn2').addEventListener('click', sumBoth);

        function sumBoth() {
            let num1 = parseInt(document.getElementById('number1').value);
            console.log(typeof num1);
            let num2 = parseInt(document.getElementById('number2').value);
            console.log(typeof num2);
            let newNumber = 0;
            if (num1 != NaN & num2 != NaN) {
                newNumber = num1 + num2;
                console.log(newNumber);
                document.getElementById('empty2').innerHTML = newNumber;
            } 
                
            
        }

        const multiply = function Multiply() {
            console.log("Let's multiply!");
            const num1 = parseInt(document.getElementById('number1').value);
            const num2 = parseInt(document.getElementById('number2').value);
            document.getElementById('empty3').innerHTML = num1 * num2;
            return num1 * num2;
        };

        const divide = num1 => num1 * num1;