function smallerNeigbour(arr,n){
    let stack = [];
    let arr1 = [];
    let i = 0
    while(i < n){
        if(stack.length == 0){
            arr1.push(-1)
        }
        else if(stack.length != 0 && arr[i] > stack[stack.length-1]){
            arr1.push(stack[stack.length-1])
        }
        else if(stack.length != 0 && arr[i] <= stack[stack.length-1]) {
            while(stack.length != 0 && arr[i] <= stack[stack.length-1]) {
                stack.pop()
            }

            stack.length == 0 ? arr1.push(-1):arr1.push(stack[stack.length-1])
        }
        stack.push(arr[i]);
        i++;
        
    }
    return arr1.join(" ")
}









function runProgram(input) {
    var input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number)
   console.log(smallerNeigbour(arr,n))

}


if (process.env.USERNAME === "pc") {


    runProgram(`8
    39 27 11 4 24 32 32 1

 
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
