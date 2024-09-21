const inpu = document.querySelector(".input");
const res = document.querySelector(".result");


function genrate(){
    res.innerHTML = "";
    if (inpu.value === "") {
        alert("Enter a number to Genrate any Table")
        return;
    }else{
        for (let i = 1; i <= 10; i++) {
            res.innerHTML += `${inpu.value} * ${i} = ${i*inpu.value} <br>`;
            console.log(i); 
        }
        inpu.value = "";
        inpu.focus();
    }

}
