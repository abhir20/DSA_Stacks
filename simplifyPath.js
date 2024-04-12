// /home/../../tmp//./

//start - dir --> push the directory to stack
//.. means go one directory back -- > pop()

const simplify = (path) => {
    let stack = [];
    for(let dir of path.split("/")){
        if(dir == "." || !dir)
            {
              continue;
            }else if(dir == ".."){
            if(stack.length > 0){
                stack.pop();
            }
        }
        else{
            stack.push(dir);
        }
    }

    return "/" + stack.join("/");
}

