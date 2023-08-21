const open = [ '(', '{', '[' ];
const close = [ ')', '}', ']' ];

function bracketch (str) {

    if(str === '') return true;

    const stack = [];

    for(let char of str){
        const open_i = open.indexOf(char);
        
        if(open_i !== -1){
            stack.push(char);
        } else {
            const close_i = close.indexOf(char);
            const open_bracket = open[close_i];
            if( stack[stack.length-1] === open_bracket ){
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if(stack.length > 0) return false;

    return true;
}

console.log(bracketch('((()))[[{{}}]]'))
