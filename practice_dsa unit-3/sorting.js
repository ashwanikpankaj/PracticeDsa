function Bubble_sort(arr,n){
    for(let i = 0; i < n-1; i++){
        let swap = false;
        for(let j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true;
            }
        }
        if(swap == false){
            break;
        }
    }
    return arr
}








function runProgram(input) {
    var input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);
  console.log(Bubble_sort(arr,arr.length))
   

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
