//forEach


// const testArray = [5, 6, 8, 9]

// function myOperationFunction(item) {
//     return item + 100;
// }


// function customForEach(array, callback) {

//     for (let index = 0; index < array.length; index++) {
//         array[index] = callback(array[index], index, array)

//     }
// }

// customForEach(testArray, myOperationFunction)

// console.log(testArray);


//map


// const testArrayMap = [5, 3, 6, 8, 9]

// function myFunctionMap(item) {
//     return item * 5
// }

// function customMap(array, callback) {
//     const newArrayMap = [];
//     for (let index = 0; index < array.length; index++) {
//         newArrayMap.push(callback(array[index], index, array))
//     }

//     return newArrayMap;
// }

// const testArrayMap2  = customMap(testArrayMap, myFunctionMap)

// console.log(testArrayMap2);


//filter



// const testArrayFilter = [10, 28, 19, 4, 44, 12]


// function myFunctionFilter(item){
//     return item > 18;
// }


// function customFilter(array, callback){
//     const newArrayFilter =[];
//     for (let index = 0; index < array.length; index++) {
//         if (callback(array[index], index, array)) {
//             newArrayFilter.push(array[index]);
//         }
//     }

//     return newArrayFilter;
// }

// const testArrayFilter2 = customFilter(testArrayFilter, myFunctionFilter)

// console.log(testArrayFilter2);



//some

// const testArraySome = [1, 9, 55, 5]

// function myFunctionSome(item) {
//     return item > 18
// }

// function customSome(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//         if (callback(array[index], index, array)) {
//             return true;
//         }

//     }
//     return false
// }


// console.log(customSome(testArraySome, myFunctionSome));





//every

// const testArrayEvery = [21, 17, 35, 45]

// function myFunctionEvery(item) {
//     return item > 18
// }

// function customEvery(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//         if (!callback(array[index], index, array)) {
//             return false;
//         }
//     }
//     return true;

// }

// console.log(customEvery(testArrayEvery, myFunctionEvery));


//slice

const testArraySlice = [10, 20, 30, 40, 55, 66]

function customSlice(array,first, second){
const newArraySlice=[];
if (typeof second !=="number") {
    for (let index = first; index < array.length; index++) {
        
        newArraySlice.push(array[index]);
    }
}
else{
    for (let index = first; index < second; index++) {
        
        newArraySlice.push(array[index]);
    }
}
return newArraySlice;
}

console.log(customSlice(testArraySlice, 1));