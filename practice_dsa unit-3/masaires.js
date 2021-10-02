

function runProgram(input) {
    var input = input.trim().split("\n");
    let line = 1;
    let stack = []
    for(let i = 1; i < input.length; i++){
        let detail = input[line++].trim().split(" ");
      //  console.log(detail)
      let query = detail[0];
      let price = detail[1];
      switch(query){
          case "1": if(stack.length == 0){
            console.log("No Food");
            break;
          }
              else{
                  console.log(stack[stack.length-1]);
                  stack.pop();
                  break;
              }      
            case "2" : stack.push(price)    
                    
      }
    }

}


if (process.env.USERNAME === "pc") {


    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1


 
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
