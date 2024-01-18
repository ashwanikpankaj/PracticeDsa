// do it by stack 


let str = "(({)){}";

// approach will be push all open bracket in stack and then if closing comes pop out

function validParenthesis(str){
    const stack = [];
    for(let i = 0; i< str.length;i++){
        if(str[i]==="("||str[i]==="{"||str[i]==="["){
            stack.push(str[i]);
        }

      else if(stack.length === 0) return false;

       else{
        let stackLast = stack.pop();
         if((str[i] === ")" && stackLast === "(") || (str[i] === "}" && stackLast === "{") || (str[i] === "]" && stackLast === "[")){
           continue; // means pop has happend just continue the loop
         }
         else{
            return false
         }
       }
}
return stack.length === 0;
}

// second approach by mapping of object
//
function secondAppraoch(str){
    const obj = {
        ")":"(",
        "]":"[",
        "}":"{"
    }

    const stack = [];
    
    for(let i = 0; i<str.length; i++){

        if(str[i]==="("||str[i]==="{"||str[i]==="["){
          stack.push(str[i])
        }
        // means it has come below still stack length is empty so just do early return
        else if(stack.length === 0) return false;

        else{
            let stackLastEl = stack.pop();
            if(obj[str[i]] ===stackLastEl ){
                continue;
            }
            else return false
        }
    }
    return stack.length === 0;
}


console.log(validParenthesis(str));
console.log(secondAppraoch(str));
