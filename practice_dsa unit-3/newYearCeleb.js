
function runProgram(input) {
    var input = input.trim().split("\n");
 //  console.log(input);
   let bk = 0;
   let fr = 0;
   let line = 1;
   let queue = [];
   let stack = [];
   for(let i = 1; i < input.length; i++){
       let detail = input[line++].trim().split(" ");
      // console.log(detail)
      let query = detail[0];
      switch (query){
          case "1": queue.push(detail[1]);
                   bk++;
                   break;

            case "2" :stack.push(detail[1]);
                       break;
                       
              case "3": if(bk != fr){
              console.log(queue[fr]) ;
              break;
              }
              else{
                  if(bk == fr){
                  console.log(-1);
                  break;
                  }
              }

              case "4": stack.length == 0?console.log(-1) : console.log(stack[stack.length-1]);
                   break;

                   case "5" : if(bk != fr){
                           stack.push(queue[fr]);
                           fr++;
                           break;
                   }

      }
   }
  
   
   

}


if (process.env.USERNAME === "pc") {

    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4
    
    
  
   
 
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
