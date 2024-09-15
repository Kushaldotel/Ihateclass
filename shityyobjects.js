const dumbPeople = [
    {
        name:"Kushal",
        age:12,
        gender:"male"
    },
    {
        name:"idk",
        age:18,
        gender:"idk"
    }
]

for (let i=0; i<dumbPeople.length; i++){
    if(dumbPeople[i]["gender"]=="male"){
        console.log(dumbPeople[i]["name"] + " is a male")
    }
}

