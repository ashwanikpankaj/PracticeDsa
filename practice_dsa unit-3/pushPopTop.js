function runProgram(input) {
  var input = input.trim().split("\n");
  //  console.log(input)
  let line = 1;
  let stack = [];
  for (let i = 1; i < input.length; i++) {
    let details = input[line++].trim().split(" ");
  //console.log(details)
    let query = details[0];
  // console.log(query)
    switch (query) {
      case "1":  stack.push(details[1]);
    //  console.log(stack)
      break;
      

      case "2":
        if (stack.length != 0) 
        stack.pop();
        break;

      case "3": stack.length == 0 ? console.log("Empty!") : console.log(stack[stack.length-1]);
      break;
    }
  }
}

if (process.env.USERNAME === "pc") {
  runProgram(`6
    1 15
    1 20
    2
    3
    2
    3

 
 `);
} else {
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
