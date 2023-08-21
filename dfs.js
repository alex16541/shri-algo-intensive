function dfs(tree, callback) {
    const stack = [tree];
    while(stack.length){
        const t = stack.pop();
        callback(t);

        stack.push(...t.children);
    }
}

const tree = {
    value:1,
    children:[
        {
            value:2,
            children:[
                
                {
                    value:3,
                    children:[
                        
                    ]
                },   
            ]
        },   
    ]
}
const res = [];
dfs(tree, (tree) => res.push(tree.value))

console.log(res);