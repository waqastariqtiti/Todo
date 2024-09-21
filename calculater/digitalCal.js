var input = document.querySelector(".input"); 

var inputElement = document.createElement("input");
inputElement.setAttribute("id", "input");
inputElement.setAttribute("type", "number");
inputElement.setAttribute("placeholder","value 1");
inputElement.style.marginTop = "5%";
inputElement.style.height = "45px";
inputElement.style.width = "100px"; 
inputElement.style.border = "2px solid tomato";
inputElement.style.borderRadius = "10px";
inputElement.style.fontSize = "20px";
inputElement.style.textAlign = "center";

input.appendChild(inputElement);

var inputElement2 = document.createElement("input");
inputElement2.setAttribute("id", "input2");
inputElement2.setAttribute("type", "text");
inputElement2.setAttribute("placeholder","Operator");
inputElement2.style.marginTop = "5%";
inputElement2.style.height = "45px";
inputElement2.style.width = "100px"; // 
inputElement2.style.border = "2px solid tomato";
inputElement2.style.borderRadius = "10px";
inputElement2.style.fontSize = "20px";
inputElement2.style.textAlign = "center";


input.appendChild(inputElement2);

var inputElement3 = document.createElement("input");
inputElement3.setAttribute("id", "input3");
inputElement3.setAttribute("type", "number");
inputElement3.setAttribute("placeholder","value 2");
inputElement3.style.marginTop = "5%";
inputElement3.style.height = "45px";
inputElement3.style.width = "100px"; // 
inputElement3.style.border = "2px solid tomato";
inputElement3.style.borderRadius = "10px";
inputElement3.style.fontSize = "20px";
inputElement3.style.textAlign = "center";


input.appendChild(inputElement3);

var Result = document.querySelector(".result");
 
function calc(){
    let secInput = inputElement2.value;
    let firstInput = Number(inputElement.value);
    let thirdInput = Number( inputElement3.value);
    switch (secInput) {
        case "+":
           Result.innerHTML = ` Result:${firstInput + thirdInput}`;
           inputElement.value = "";
           inputElement2.value = "";
           inputElement3.value = "";
            break;

            case "-":
           Result.innerHTML = ` Result: ${firstInput - thirdInput}`;
           inputElement.value = "";
           inputElement2.value = "";
           inputElement3.value = "";
            break;

            case "*":
           Result.innerHTML = ` Result: ${firstInput * thirdInput}`;
           inputElement.value = "";
           inputElement2.value = "";
           inputElement3.value = "";
            break;

            case "/":
           Result.innerHTML = ` Result: ${firstInput / thirdInput}`;
           inputElement.value = "";
           inputElement2.value = "";
           inputElement3.value = "";
            break;
    
        default:
            if (inputElement.value === "" || inputElement2.value === "" || inputElement3.value === "" ) {
                Result.innerHTML = "Enter input value properly";
            }else{
                Result.innerHTML = "Invalid operator! Use +, -, *, or /.";
            }
            break;
    }
}
