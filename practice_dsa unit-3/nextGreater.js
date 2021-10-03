function nextGreater(arr,n){
    let s =[];
    let arr1 = [];
    for(let i = n-1; i >=0; i--){
        if(s.length == 0){
            arr1.push(-1);
        }
        else if(s.length != 0 && arr[i]<s[s.length-1]){
            arr1.push(s[s.length-1])
        }
        else if(s.length != 0 && arr[i]>= s[s.length-1]){
            while(s.length != 0 && arr[i]>= s[s.length-1]){
                s.pop()
            }
            s.length == 0 ? arr1.push(-1):arr1.push(s[s.length-1]);
        }
        s.push(arr[i])
    }
    return arr1.reverse().join(" ")
}





function runProgram(input) {
    var input = input.trim().split("\n");
//console.log(input);
let cases = +input[0];
let line = 1;
for(let i = 0; i < cases; i++){
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(nextGreater(arr,n))
}

}


if (process.env.USERNAME === "pc") {


    runProgram(`1
    4
    1 3 2 4
 

 
 `);


}
else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
