function sort(arr) {
    let sorted = [arr.shift()];

    while(arr.length){
        const item = arr.shift();
        let bigger = false;

        if(item <= sorted[0]){
            sorted.unshift(item)
        } else if (item >= sorted[sorted.length-1]){
            sorted.push(item);
        } else {
            
            for(let j = 0; j < sorted.length; j++){
                if(item > sorted[j]){
                    bigger = true;
                    continue;
                } 
                
                if(item < sorted[j] && bigger){
                    sorted = [...sorted.slice(0, j), item, ...sorted.slice(j)];
                    break;
                }
            }
        }
    }

    return sorted;
}

const res = sort([1,3,6,2,8,4,3,2]);

console.log(res);