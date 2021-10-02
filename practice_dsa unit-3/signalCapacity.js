function signalCapacity(arr,n){
    let stack  = [];
    stack.push(0)
    let res = [];
   res[0] = 1;
    for(let i = 1; i < n; i++){
        while(arr[stack[stack.length-1]] <= arr[i] && stack.length != 0){
            stack.pop();
        }
        res[i] = stack.length == 0 ? i+1:i-stack[stack.length-1];
        stack.push(i)
    }
    return res
}




function runProgram(input) {
    var input = input.trim().split("\n");
   let cases = +input[0];
   let line = 1;
   for(let i = 0; i < cases; i++){
       let n = +input[line++].trim();
       let arr = input[line++].trim().split(" ").map(Number);
    console.log(signalCapacity(arr,n).join(" "))
   }
   

}


if (process.env.USERNAME === "pc") {


    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8
   
 
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
