function primeNumbers (arr) {
    arr[0] = null;
    let i = 1;

    while(i < arr.length){

        if(arr[i] === null) {
            i++;
            continue;
            
        }

        for(let j = arr[i]*2; j <= arr.length; j += arr[i]){
            arr[j-1] = null;

        }

        i++;
    }

    return arr.filter(n => n !== null);
}

console.log(primeNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));
