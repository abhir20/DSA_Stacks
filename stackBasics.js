//Satck - LIFO
//Push and pop

class stack {
    
    constructor(arr){
        this.arr = arr;
    }
     push(arr){
       for(let value of arr){
         stack.push(value);
       }
       console.log(stack);
    }

     pop(stack){
        const last = stack.pop();
        console.log(last);
    }
}

const arr = [1,2,3,4,5,6,7,8];

