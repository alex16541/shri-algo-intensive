function bfs(tree, callback) {
    const stack = [tree];
    let i = 0;
    while(i < stack.length){
        const t = stack[i];
        callback(t);

        stack.push(...t.children);
        i++;
    }
}

const tree = {
    value:1,
    children:[
        {
            value:3,
            children:[
                
                {
                    value:5,
                    children:[
                        
                    ]
                },   
            ]
        },   
        {
            value:2,
            children:[
                
                {
                    value:4,
                    children:[
                        
                    ]
                },   
            ]
        },   
    ]
}
const res = [];
bfs(tree, (tree) => res.push(tree.value))

console.log(res);