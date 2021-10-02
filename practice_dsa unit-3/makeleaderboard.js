
function sortNames(name,marks){
    let n = name.length;
    for(let i = 0; i < n-1; i++){
        for(let j = 0; j < n-i-1; j++){
            if(compareTwoName(name[j],name[j+1])> 0){
                let temp = name[j];
                name[j] = name[j+1];
                name[j+1] = temp;
                let temp1 = marks[j];
                marks[j] = marks[j+1];
                marks[j+1] = temp1
            }
        }
    }
  //  console.log(name,marks)
   sortByMarks(name,marks)
}

function sortByMarks(name,marks) {
    let marks1 = marks.map(Number);
    //console.log(marks1)

    for(let i = 0; i < marks.length-1; i++){
        for(let j = 0; j < marks.length-i-1; j++){
            if(marks1[j+1]>marks1[j]){
                let temp = marks1[j];
                marks1[j] = marks1[j+1];
                marks1[j+1] = temp;

                let temp1 = name[j];
                name[j] = name[j+1];
                name[j+1] = temp1
            }
        }
    }
    console.log(name,marks1)

    leaderBoard(name,marks1)
}

function compareTwoName(a,b){
    for(let i = 0; i < Math.min(a.length,b.length); i++){
        if(a.charCodeAt(i)!=b.charCodeAt(i)){
         return   a.charCodeAt(i)- b.charCodeAt(i)
        }
    }
    return 0;
}

function leaderBoard(name,marks){
let prev_marks = -1;
let rank = 1;
let count = 0;
for(let i = 0; i < marks.length; i++){
    if(prev_marks == marks[i]){
        console.log(`${rank} ${name[i]}`)
    }
    else{
        rank = rank + count;
        console.log(`${rank} ${name[i]}`);
        count = 0;
    }

    prev_marks = marks[i];
    count++
}
}




function runProgram(input) {
    var input = input.trim().split("\n");
//   console.log(input.length)
  let name = [];
  let marks = [];
  let line = 1;
  for(let i = 1; i < input.length; i++){
   let detail =  input[i].trim().split(" ")
      name.push(detail[0]);
      marks.push(detail[1])
  }
 sortNames(name,marks)

}


if (process.env.USERNAME === "pc") {


    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45

 
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
