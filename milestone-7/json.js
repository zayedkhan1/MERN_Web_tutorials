const stars={
    name:'sakib bai',
    age:34,
    movies:['rajdhani','shahabag','bangladesh']
}
const studentJson=JSON.stringify(stars)
console.log(stars)
console.log(studentJson)
const studenobj=JSON.parse(studentJson)
console.log(studenobj)
// fetch
// fetch('url')
// .then (res=>res.json())
// .then(data=>console.log(data))

// key and value
const keys=Object.keys(stars)
console.log(keys)
const values=Object.values(stars)
console.log(values)
// forEach
const numberse=[34,5,64,32,345,5,4]
numberse.forEach(num=>console.log(num*3))
// for of(on array like object)

// for in (on object)

// add or remove form an array
const productes=[
    {name:'laptop',price:4500,brand:'HP',color:'silver'},
    {name:'Pc',price:43660,brand:'dell',color:'black'},
    {name:'watch',price:465,brand:'casioo',color:'golder'},
    {name:'camera',price:29545,brand:'nikkon',color:'gray'},
];
const newProduct={name:'webcam',price:599,brand:'lal'}

// add new product

const newProducts=[...productes,newProduct]
console.log(newProducts)
// create a new array without one specific  item
// remove phone measn create  a new array without the phn

const remainign=productes.filter(product=>product.name!='pc')
