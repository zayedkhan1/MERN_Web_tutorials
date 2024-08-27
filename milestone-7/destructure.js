const Numbers=[45,64]
// const x=Numbers[0]
// const y=Numbers[1]
const [x,y]=[45,64]
console.log(x,y)
// 
function boxify(num1,num2){
    const nums=[num1,num2]
    return nums
}
const [first,second]=boxify(90,83)
console.log(first,second)

const studentss={
    name:'sakib khan',
    age:34,
    movies:['king khan','rajdinar raja','dhakar raja']
}
const [firstM,secodnM,thirdM]=studentss.movies
// object destrecturing
const {name,age}={name:'alu',age:14};

const employee={
    name:'javascript',
    ide:'vs_code',
    machine:'windos',
    languages:['html','css','js'],
    spefication:{
       height:87,
       weight:82,
       address:'kumartek',
       drink:'electricity',
       watch:{
        color:'black',
        price:600,
        brand:'garmin'
       }
    },
}
const {machine,ide,spefication}=employee
console.log(machine,ide,spefication)
const {weight,address}=employee.spefication
console.log(weight,address)
const {brand}=employee?.spefication?.watch
console.log(brand)
