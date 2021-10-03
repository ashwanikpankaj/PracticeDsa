

function runProgram(input) {
    var input = input.trim().split("\n");
    // console.log(input);
  
    let cases = +input[0];
    let line = 1;
  
    let q1 = [];
    let q2 = [];
    let q3 = [];
    let q4 = [];
    let mq = []
    for (let i = 0; i < cases; i++) {
      let arr = input[line++].trim().split(" ");
      let char = arr[0];
      if (char == "E") {
        let roll_no = arr[2];
        let club = arr[1];
        switch (club) {
          case "1":
            if (mq.length == 0 || !mq.includes("1"))
              mq.push("1");
            q1.push(roll_no);
            break;
  
          case "2":
            if (mq.length == 0 || !mq.includes("2"))
              mq.push("2");
            q2.push(roll_no);
            break;
  
          case "3":
            if (mq.length == 0 || !mq.includes("3"))
              mq.push("3");
            q3.push(roll_no);
            break;
  
          case "4":
            if (mq.length == 0 || !mq.includes("4"))
              mq.push("4");
            q4.push(roll_no);
            break;
        }
      }
  
      else {
        if (!mq.length == 0) {
          let x = mq[0] /// getting the front element;
          switch (x) {
            case "1":
              console.log((`1 ${q1.shift()}`));
              if (q1.length == 0)
                mq.shift();
              break;
  
            case "2":
              console.log((`2 ${q2.shift()}`));
              if (q2.length == 0)
                mq.shift();
              break;
  
         
  
            case "3":
              console.log((`3 ${q3.shift()}`));
              if (q3.length == 0)
                mq.shift();
              break;
  
  
            case "4":
              console.log((`4 ${q4.shift()}`));
              if (q4.length == 0)
                mq.shift();
              break;
          }
        }
      }
    }
  
  
  }
  
  
  
  
  if (process.env.USERNAME === "pc") {
  
  
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
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
  
  
  