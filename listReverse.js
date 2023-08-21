
function listReverce(list){
    let current = list;
    let next = current.next;
    current.next = null;

    while(next != null){
        const temp = next.next;
        next.next = current;
        current = next;
        next = temp;
    }

    return current;
}

const list = {
    value: 1,
    next: {
        value:2, 
        next: {
            value:3, 
            next:{
                value:4, 
                    next:{
                        value:5, 
                        next:null
                }
        }
    }
    }
}

console.log(listReverce(list));
