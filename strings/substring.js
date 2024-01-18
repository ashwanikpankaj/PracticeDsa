// find the substring 
let str = "abc";

// first method
function getSubstring(str){
    const arr = [];
    for(let i = 0;i<str.length; i++){
        let tempStr = "";
        for(let j=i; j<str.length;j++){
            tempStr = tempStr+str[j]
            arr.push(tempStr)
        }
    }
    return arr;
}

console.log(getSubstring(str))
console.log(getSubstring("apple"))

//second method