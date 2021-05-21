const calc$$ = document.body.querySelector(".calculadora");
const screen$$ = document.body.querySelector(".pantalla");

const operation = [];
let count = 0;
let equalPushed = false;

const useCalc = (event) => {
    if (event.target.value != undefined) {
        const e = event.target.value;

        if (equalPushed === true) {
            clear();
            equalPushed = false;
        }

        if (e === "<-") {
            if (operation[1] != undefined && operation[2] === undefined) {
                operation.pop();
                screen$$.value = "";
                count = count - 2;
                console.log(operation);
            } else {
                screen$$.value = screen$$.value.substring(0, screen$$.value.length - 1);
                operation[count] = operation[count].substring(0, operation[count].length - 1);
                console.log(operation);
            }
        }

        if (count === 2 && isNaN(e) && e !== "." && e !== "<-") {
            operation[0] = operate(operation[0], operation[1], operation[2]);

            if (e === "=") {
                screen$$.value = operation[0];
                equalPushed = true;
            }

            operation.pop();
            operation.pop();
            count = 0;
            console.log(operation);
        }

        if (!isNaN(e) || e === ".") {
            if (isNaN(screen$$.value) || screen$$.value === ".") clear();
            screen$$.value = screen$$.value + event.target.value;
            operation[count] = screen$$.value;
            console.log(operation);
        } else if (e != "=" && e != "<-") {
            count++;
            screen$$.value = event.target.value;
            operation[count] = event.target.value;
            count++;
            console.log(operation);
        }
    }
};

calc$$.addEventListener("click", useCalc);

const clear = () => {
    screen$$.value = "";
};

const operate = (num1, operator, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(num1, num2);
    result = 0;

    switch (operator) {
        case "AC":
            break;
        case "M+":
            break;
        case "M-":
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "+":
            result = num1 + num2;
            break;
        default:
            break;
    }
    console.log(result);
    return result.toString();
};
