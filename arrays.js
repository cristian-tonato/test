/*length, push, pop, unshift, shift, some, 
every, find, filter, map, findIndex, includes,
 indexOf, reduce, joinexport*/

export function arraypush(arr,item){
    arr.length =arr.length +1;
    arr[arr.length -1]=item;
    return arr.length 
} 
export function arraypop(arr){
    const pop = arr [arr.length -1];
        if(arr.length === 0){
            return undefined
        }
        arr.length = arr.length -1;
        return pop
};

export function arrayshift(arr) {
    let item = arr[0];
    let counter = 0;
    for (let i = 1; i < arr.lenght; i++) {
        arr[counter] = arr[i];
    }
    arraypop(arr);
    return item;
}