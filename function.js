

function isEven( num){
    if(num.includes("@")){
        return true;

    }
    else{
        return false;
    }
}

console.log(isEven("6"));
console.log(isEven("5"));
console.log(typeof("j"));

//check box


let num2;

document.getElementById(`t2`).onclick = function(){
    num2 = document.getElementById(`box`).value;
    document.getElementById(`t1`).textContent=`hello ${num2}`;
}


//conversion


let age = window.prompt("how old are you");
age = Number(age);
age+=1;
console.log(age);