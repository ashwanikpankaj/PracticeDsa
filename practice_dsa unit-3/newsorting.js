function hasanSorting(arr,n,k){
    for(let i = 0; i < n-1; i++){
        for(let j = 0; j < n-i-1;j++){
            if(arr[j+1]%k < arr[j]%k){
                let temp = arr[j];
                arr[j]  = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}




function runProgram(input) {
    var input = input.trim().split("\n");
    let detail = input[0].trim().split(" ").map(Number);
    let k = detail[1];
    let n = detail[0]
  let arr = input[1].trim().split(" ").map(Number);
   console.log(hasanSorting(arr,n,k).join(" "))
   

}


if (process.env.USERNAME === "pc") {


    runProgram(`5 6
    12 18 17 65 46

 
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
