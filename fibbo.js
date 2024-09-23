function twoSum(arr, target){

    index = []

    for(let i=0; i<=arr.length; i++){

        for(let j=1; j<=arr.length; j++){

            if(arr[i] + arr[j]==target){

                index.push(i);
                index.push(j);

                break;
            }

        }

    }
    return index;
}

result = twoSum([2,7,11,15],13);
console.log("The result is",result)