
function runProgram(input) {
    var input = input.trim().split("\n");
   //console.log(input);
   let bk = 0;
   let fr = 0;
   let line = 1;
   let queue = []
   for(let i = 1; i < input.length; i++) {
       let detail = input[line++].trim().split(" ");
  //   console.log(detail)
   let query = detail[0];
   switch(query){
       case"E" : queue.push(detail[1]);
                bk++;
               console.log(bk-fr);
                break;
        case "D" : if(bk == fr) {
                   console.log("-1 0");
                   break;
        }
                   else{
                       let person = queue[fr];
                     //  console.log(person)
                       fr++;
                       let new_length = bk-fr;
                       console.log(`${person} ${new_length}`);
                       break;
                   }
   }
   }
   

}


if (process.env.USERNAME === "pc") {


    runProgram(`5
    E 2
    D
    D
    E 3
    D
    
  
   
 
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
