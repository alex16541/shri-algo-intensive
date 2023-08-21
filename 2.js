function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let min_i = i;
        for (let j = i; j < arr.length; j++) {
            const current = arr[j];

            if(current < min){
                min = current;
                min_i = j;
            }
            
        }

        [
            arr[i], arr[min_i]
        ] = [
            arr[min_i], arr[i]
        ]
    }

    return arr;
}

const res = sort([1,6,3,9,5,3,4,9]);

console.log(res);