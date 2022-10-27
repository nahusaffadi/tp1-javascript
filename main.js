
const pizzas = [
    {
        id:1,
        nombre:'Mozzarela',
        ingredientes:['Mozzarella','Oregano'],
        precio:520,
    },
    {
        id:2,
        nombre:'Napolitana',
        ingredientes:['Mozzarella','Rodajas de tomate','Oregano'],
        precio:1200,
    },
    {
        id:3,
        nombre:'4 Quesos',
        ingredientes:['Mozzarella','Roquefort','Parmesano','Provolone'],
        precio:1000,
    },
    {
        id:4,
        nombre:'Margarita',
        ingredientes:['Mozzarella','Albahaca fresca'],
        precio:700,
    },
    {
        id:5,
        nombre:'Especial',
        ingredientes:['Mozzarella','Jamon','Morron'],
        precio:1100,
    },
    {
        id:6,
        nombre:'Capresse',
        ingredientes:['Mozzarella','Rodajas de tomate','Albahaca','Aceite de oliva'],
        precio:1000,
    }
]



pizzas.forEach((pizzas)=>{
    if(pizzas.id %2 !== 0){
        console.log(`La pizza ${pizzas.nombre} tiene un ID impar`)
    }
}
)

const pizzasMenos600 = pizzas.some(pizzas => pizzas.precio < 600) 

console.log('Si hay pizzas que valen menos de $600:', pizzasMenos600)


pizzas.forEach((pizzas) => {
    console.log('La pizza',pizzas.nombre , 'vale $',pizzas.precio)
})


pizzas.forEach((pizzas) => {
    console.log(`La pizza ${pizzas.nombre} contiene : ${pizzas.ingredientes}`)
})