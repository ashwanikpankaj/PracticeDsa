function selectionSort(arr,n){
    for(let i = 0; i < n-1; i++){
        let min_index = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min_index]){
                min_index = j
            }
        }
        let temp  = arr[i];
        arr[i] = arr[min_index];
        arr[min_index]  = temp;
    }
    return arr
}






function runProgram(input) {
    var input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);
  console.log(selectionSort (arr,arr.length))
   

}


if (process.env.USERNAME === "pc") {


    runProgram(`5
    3 5 0 9 8
 
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
