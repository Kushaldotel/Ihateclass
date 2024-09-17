// call backs
function sum(num1, num2, funcnext){
    let result = num1 + num2;
    funcnext(result);
}


function displayresult(result){
    console.log("The result of the sum is " + result);
}

function displayPassive(data){
    console.log("Sum's result is " + data);
}

const ans = sum(2,3, displayresult);
// console.log(ans);