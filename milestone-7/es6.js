const numbers=[56,78,43,23,22,11]
const students={
    name:'sakib khan',
    age:34,
    movies:['king khan','rajdinar raja','dhakar raja']
}

const abot=`my name is ${students.name},age of sakib bai ${students.age},i want to set second index ${numbers[2]},also liked movies ${students.movies[0]}`
console.log(abot)

const getFifty=()=>console.log(555)
getFifty()
// => er dan pashe ja e likhbo ta e return korbe
const addSix=(num)=> num+65;
const result=addSix(6)
console.log(result)
const isEven=(x)=>x%2==0;
const add=(a,b,c)=>a+b+c;
console.log(add(3,4,5))
// multiline er khatre return korbe na ,ta likhe dite hobe
const multi=(num1,num2)=>{
    sum=num1+num2
    return sum
}
const new_numbers=[...numbers];
numbers.push(99)
console.log(numbers)

console.log(new_numbers)
// create a new array from an older array oad add an element
const currentNumbers=[...numbers,55]
console.log(currentNumbers)

