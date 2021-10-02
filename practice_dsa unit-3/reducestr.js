//----------------------naiveapproach----------------------??
function reduceString(str){
    let i = 0;
    let count = 0;
    let str1 = "";
    while(i < str.length){
        if(str[i] == str[i+1]){
           i = i + 2 
        }
        else{
        
            str1  = str1 + str[i++];
           
          
        }
        
    }
    return str1
}





function reduceStr(str){
    let stack = [];
    for(let i = 0; i < str.length; i++){
        if(stack.length == 0)
        stack.push(str[i]);

        else{
            if(stack[stack.length-1] != str[i]){
                stack.push(str[i])
            }
            else{
                stack.pop();
            }
        }
    }
  if(stack.length == 0)
  return "Empty String";
  else
  return stack.join("")
}




function runProgram(input) {
    var input = input.trim()
      console.log(reduceStr(input));
      console.log(reduceString(input))
//
  }
  
  if (process.env.USERNAME === "pc") {
    runProgram(`aaabccddd`
      
  
   
   );
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
  