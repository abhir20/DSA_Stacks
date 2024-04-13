//add to the stack until you see open brackets
//once you see closing brackets, start solving
//keep iterating and fix it

//When to use LIFO, 
//How to sue L-->R Parsing
//Implementation -- add elements or indices[if you want one single template]


// Given a string s of only brackets, return true if s is valid or return false
//Input: ({}[])
//Output: true

//Input: {()
//O/p : false

const isValid = (str) => {

    let stack = [];

    const mapping = {
        "}" : "{",
        "]" : "[",
        ")" : "("
    };

    const openBracketCheck = "({[";

    for(let bracket of str){
        if(openBracketCheck.includes(bracket)){
            stack.push(bracket);
        }
        if(stack.length > 0){
           
            if(mapping[bracket] === stack[stack.length - 1]){ // if open and close brackets match
                
                stack.pop();
                return true;
            }
        }
        else
        {
            return false
        }
       
    }

    return stack.length === 0;
}

//To check if corresponding brackets are properly closed
var isValidCorresponding = function(s) {
    let obj={'(':')','{':'}','[':']'}
    let stack=[]
    for(let char of s){
        if(obj[char]) stack.push(char)
        else if(obj[stack.pop()]!==char) return false
    }
    return stack.length==0
};

const str = "([)]";
console.log(isValid(str));