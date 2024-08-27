const products=[
    {name:'laptop',price:4500,brand:'HP',color:'silver'},
    {name:'Pc',price:43660,brand:'dell',color:'black'},
    {name:'watch',price:465,brand:'casioo',color:'golder'},
    {name:'camera',price:29545,brand:'nikkon',color:'gray'},
]


const brands=products.map(product=>product.brand)
console.log(brands)
const prices=products.map(product=>product.price)
console.log(prices)

products.forEach(product=>console.log(product))

products.forEach(product=>{


})
//
const cheap=products.filter(product=>product.price<=5000)
console.log(cheap)
//
const sp_name=products.filter(product=>product.name.includes('c'));
console.log(sp_name)

const special=products.find(product=>product.name.includes('c'))
console.log(special)