function isBalanced(arr){
    let i = 0;
    let n = arr.length;
    let stack = [];
    while(i < n){
        if(arr[i] == "{" || arr[i]=="(" || arr[i]=="["){
            stack.push(arr[i]);
         //   console.log(stack)
        }
        else {
            if(stack.length == 0){
                return "not balanced";
               console.log(hello)
            }
            else{
                if(stack[stack.length-1] == "{" && arr[i] =="}" || stack[stack.length-1] == "(" && arr[i]==")" ||stack[stack.length-1] == "[" && arr[i] =="]" ){
                    stack.pop();
                   // console.log(stack)
                }
            }
        }
      i++;
    }
    if(stack.length == 0){
        return "balanced"
    }
    else{
        return "not balanced"
    }
}






function runProgram(input) {
    var input = input.trim().split("\n");
//   console.log(input);
let cases = +input[0];
let line = 1;
for(let i = 0; i < cases; i++){
    let arr = input[line++].trim().split("");
    console.log(isBalanced(arr))
}

  
   
   

}


if (process.env.USERNAME === "pc") {

    runProgram(`3
    {([])}
    ()
    ([]
    
 
    
    
  
   
 
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
