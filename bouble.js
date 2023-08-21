function sort(arr) {
    let i = 0;
    let j = 1;

    let len = arr.length;

    while( len >= 2) {
        if(arr[i] > arr[j]){
            [
                arr[i], arr[j]
            ] = [
                arr[j], arr[i]
            ]
        }

        if(j === len - 1){
            i = 0;
            j = 1;
            len--;

        } else {
            i++;
            j++;

        }

    }

    return arr;
}

const res = sort([1,6,3,9,5,3,4,9]);

console.log(res);