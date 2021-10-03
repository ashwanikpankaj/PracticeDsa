



function runProgram(input) {
    var input = input.trim().split("\n");
   // console.log(input)
   let input_detail = input[0].trim().split(" ").map(Number);
   let k = input_detail[0];
  // console.log(k)
  let bk = 0;
  let fr = 0;
  let queue = []
   let line = 1;
   for(let i = 1; i < input.length; i++){
       let detail = input[line++].trim().split(" ");
      // console.log(detail)
      let query = detail[0];
      switch(query){
          case "1": if(queue.length < 2){
                     queue.push(detail[1]);
                     console.log(detail[1]);
                     bk++;
                     break;
          }
                    else{
                        console.log(-1);
                        break;
                    }
            case "2": if(bk == fr){
                      console.log(-1);
                      break;
            }        
                     else {
                        console.log(queue[fr++]);
                        break;
                     }
      }

   }

   

}


if (process.env.USERNAME === "pc") {

    runProgram(`2 6
    1 1
    1 2
    1 3
    2
    2
    2

 
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
