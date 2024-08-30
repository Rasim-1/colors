// const b = [
// {
// name:'rasim',
// surname:'khusanbaev',
// address:{
//     city:'tashkent',
//     street:77
// }
// }
// ]


// for (let i = 0; i < colors.length; i++) {
    
//     // console.log(`я люблю кущац ${colors[i]}`);

// }
// console.log(`у меня ${colors.length}`+ 'элемента ');
// if (colors.length == 1) {
//     console.log('у меня один элемент');
    
// }else if(colors.length == 2){
//     console.log('у меня два элемента');
// }if (colors.length == 3) {
//     console.log('у меня три элементa
// }else if(colors.length == 4){
// console.log('у меня четыре элемента');
// }else if(colors.length == 5){
//     console.log('у меня пять элементов');
// }




//цикл упрощенный
// const colors = ['red','green','blue','pink']
// colors.forEach(element => {
// console.log(element);

// })
// console.log(colors.length);

const fruits = ['apple','banana','orange','mango']
const list = document.querySelector('.list')
// list.append (fruits[0])


fruits.forEach((el,index) => {
    const text = document.createElement('p')
    text.innerText = el
    text.classList.add(`color${index}` )
    list.append(text)

    text.onclick = () =>{
       text.innerText = (`ты кликнул ${ el}`)
    }
})