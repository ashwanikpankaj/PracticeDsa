// reverse the string;

const str = "abc";
const secondStr = "ashwani";

// first approach 

function reversString(str){
    let reversedStr = "";
    for(let i = str.length-1; i >=0; i--){
        reversedStr = reversedStr+str[i];
    }
    return reversedStr;
}

console.log(reversString(str));
console.log(reversString(secondStr));

// try to solve with two pointer approach
// approch make the string to array and then apply two pointer approach

function secondApproach(str){
    let arr = str.split("");
    let i = 0;
    let j = arr.length-1;
    while(i < j){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
        j--;
    }
    return arr.join("");
}

console.log(secondApproach(str))
console.log(secondApproach(secondStr))