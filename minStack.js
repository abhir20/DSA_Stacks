//Design a stack that supports:
//push(x) -- pushes x on stack
//top() -> x sees the top element and return it
//pop() -> x; removes the top element and returns it
//getMin() -> x; returns the min value of the stack

//Constraints all queries run in constant O(1)

//getMin() is the pain operation here, need an optimal solution
//Use another stack , reflect the changes of the original stack
//ex : push(7),push(3) - the other stack stores min of 7 and 3
//push(9) the new stack will only have 3 as its the minimum
//getMin() - check the top of new stack and return 3 peek operation

// class MinStack{
//     constructor(){
//         this.stack = [];
//         this.min_stack = [];//extra new stack
//     }

//     push(x){
//         this.stack.push(x);

//         if(this.min_stack.length > 0){
//             this.min_stack.push(Math.min(x, this.min_stack[-1]))
//         }
//         else{
//             this.min_stack.push(x);
//         }
//     }

//     pop(){
//         if(this.stack.length > 0){
//             this.stack.pop();
//             this.min_stack.pop();
//         }
//     }

//     top(){
//         if(this.stack.length > 0){
//         return this.stack[-1];
//         }
//         else
//         return -1;
//     }

//     getMin(){
//         if(this.min_stack.length > 0){
//             return this.min_stack[-1];
//         }
//         else{
//             return -1;
//         }
//     }
// }


var MinStack = function() {
    this.stack = [];
    this.min_stack = [];//extra new stack
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);

        if(this.min_stack.length > 0){
            this.min_stack.push(Math.min(val, this.min_stack[this.min_stack.length-1]))
        }
        else{
            this.min_stack.push(val);
        }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     if(this.stack.length > 0){
            this.stack.pop();
            this.min_stack.pop();
        }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
     if(this.stack.length > 0){
        return this.stack[this.stack.length-1];
        }
        else
        return -1;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
      if(this.min_stack.length > 0){
            return this.min_stack[this.min_stack.length-1];
        }
        else{
            return -1;
        }
};


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
