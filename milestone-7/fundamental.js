const  father_name='arnold'
let season='rainy'
season='winter'
console.log(season)

const number=[56,78,43,23,22,11]
number.push(90)
number[0]=50
console.log(number.length)
console.log(number)
for(let i=0;i<number.length;i++){
    console.log(number)
}
function multiplication(a,b){
    const result=a*b
    console.log(result)
}

const output=multiplication(a=23,b=56)
console.log(output)

const student={
    name:'sakib khan',
    age:34,
    movies:['king khan','rajdinar raja','dhakar raja']
}
const myVariable='age'
console.log(student.age)
console.log(student['age'])
console.log(student[myVariable])