const list1 = [1,2,3,4,5];

const list2 = [];

for(let i=0; i<list1.length; i++){
    list2.push(list1[i]*2)

};

console.log(list2);



function mul2(i){
    return i*2;
}

const newresult = list1.map(mul2);

console.log(newresult);