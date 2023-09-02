// Question # 1

const func = (array:number[],index:number,value:number):number[] => {

    array.splice(index,0,value);
    return array

}

console.log(func([1,2,3,4],2,56))



// Question # 2 

interface Item {id: string, name: string, price: number, qty: number}

const cart: Item[] = [];

function addItem (item: Item) {
    cart.push(item);
}

function removeItem (itemIndex: number) {
    cart.splice(itemIndex, 1);
}

function updateQty (itemIndex: number, newQty: number) {
    const updatedQtyItem = {...cart[itemIndex], qty: newQty};
    cart.splice(itemIndex, 1, updatedQtyItem);
}

addItem({id: '1', name: 'Facewash', price: 200, qty: 2});
// addItem({id: '2', name: 'Shampoo', price: 5, qty: 1});
console.log("Item added", cart);
removeItem(0);
console.log("Remove Item", cart);
updateQty(0, 5);
console.log("Update Item", cart);


// Question # 3


let i=0
while(i<=25){
    console.log(i)
    i++
}


// Question # 4

let k=0;
while(k<20){
    if(k%2==0){
        console.log(k)
    }
    k++
}


// Question # 5


let factorial = 1;
const fact=(num:number):number=>{
    if(num==0){
        return 1;
    }
    else{
        while(num>0){
            factorial *= num;
            num-- 
        }
        return factorial
    }
    
}

console.log(fact(5))


// Question # 6


let array_num:number[]=[12,3,4,-2,-5,-56,77,83,12]

for(let i=0;i<array_num.length;i++){
    if(array_num[i]<0){
        array_num.splice(i,1)
        i--
    }
}
console.log(array_num)


// Question # 7


let num_array:number[]=[12,3,4,2,-5,12]
let j=0;
let sum=0;
const sum_nums = (parameter:number[]):number=>{
    while (j<parameter.length){
        sum+=parameter[j]
        j++
    }
    return sum;
}
console.log(sum_nums(num_array))


// Question # 8


const convertTemperature = (celsiusT: number[]) => {
    let i = 0;
    const convertedT:number[] = [];

    while (i < celsiusT.length) {
        const result = (celsiusT[i] * (9/5)) + 32;
        convertedT.push(result);
        i++;
    }

    return convertedT;
}

const result = convertTemperature([37,38.8,3]);
console.log(result);
