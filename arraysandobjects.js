const ages = [1,2,3,4,5,6,7,8,9,10];

for (let i=0; i<ages.length; i++){
    if (ages[i] % 2 == 0){
        console.log(ages[i]+ " is even.");
    }else{
        console.log(ages[i]+ " is odd.");
    }
}