const ages = [1,2,3,4,5,6,7,8,9,10];

biggest = 0;
smallest = 10000000;

for (let i=0; i<ages.length; i++){
    if (ages[i] > biggest){
        biggest = ages[i];

    }
    if (ages[i] < smallest){
        smallest = ages[i];
    }
}

console.log("The biggest number is " + biggest);
console.log("The smallest number is " + smallest);