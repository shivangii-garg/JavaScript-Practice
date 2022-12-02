let people = ["Greg", "Mary", "Devon", "James"]

for(let i = 0; i< people.length; i++ )
    console.log(people[i]);

    //remove Greg
people.shift();

    //remove James
console.log(people.pop());

    //add Matt in front of the row
console.log(people.unshift("Matt"));

    //add Shivangi at the end
console.log(people.push("Shivangi"))

console.log(people);

    //console.log till Marry
let i = 0;
do {
    console.log(people[i]);
    i++;
} while(people[i] === "Mary");

//slice
let newArr = people.slice(2);
console.log(newArr);

//index
console.log(people.indexOf("Mary"));
console.log(people.indexOf("foo"));

 people = ["Greg", "Mary", "Devon", "James"]

 for(let i=0; i< people.length; i++)
 {
    if(people[i] === "Devon"){
         console.log(people.splice(i, 1, "Elizabeth", "Artie"));
    }
 }
 console.log(people);

 let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

for(let i=0 ; i<student1Courses.length; i++){
    for(let j=0; j<student2Courses.length; j++){
        if(student1Courses[i] === student2Courses[j])
        console.log(student1Courses[i]);
    }
}

let is_array = (input) => {
    Array.isArray(input);
}
console.log(Array.isArray('w3resource'));
console.log(is_array([1, 2, 4, 0]));

console.log("NEWWWW")

let first = (array, n) => {
    if (n !== undefined) {
     console.log(  array.splice(0, n));
    }
    else {
      console.log(  array.shift());
    }
//    if (array == null) 
//       return void 0;
//     if (n == null) 
//       return array[0];
//     if (n < 0)
//       return [];
//     return array.slice(0, n);
}
 first([7, 9, 0, -2]);
first([],3);
first([7, 9, 0, -2],3);
first([7, 9, 0, -2],6);
first([7, 9, 0, -2],-3);

//using Slice

let first2 = (array, n) => {
    if (n !== undefined)
    return array.slice(0, n);
    else
    return array.slice(0,1);
}
console.log(first2([7, 9, 0, -2]));
console.log(first2([],3));
console.log(first2([7, 9, 0, -2],3));
console.log(first2([7, 9, 0, -2],6));
console.log(first2([7, 9, 0, -2],-3));

//last

let last = (array, n) => {
    if(n !== undefined)
    return array.slice(((array.length-n)), array.length);
    else
    return array.slice(array.length-1, array.length);
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

from
let name = "Shivangi"
console.log(Array.from(name));
let num = 12323123;
console.log(Array.from((num.toString())));

let input = prompt("Enter a number: ");
let newinput = input.toString();
let arr = Array.from(newinput, Number);

for(let i =0 ; i< arr.length; i++){
    if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0){
        arr.splice(i+1, 0, "-")
            console.log("arr: ", arr);
    }
}

console.log("array: ", arr);

let sort = (arr) => {
    return arr.sort();
}

console.log(sort([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));

let sumN = (n) => {
    let sum = 0;
    for(let i =1; i<=n;i++){
        if(i % 2 === 0)
        sum = sum + i;
    }
    return sum;
}

console.log(sumN(6))

for( let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        console.log(j);
    }
    console.log("\n");
// }

let getFib = (n) => {
    if (n ==1 || n==2)
    return 1;

    let result = getFib(n-1) + getFib(n-2);
    return result;
}

console.log(getFib(6));

let isPrime = n => {
    for(let i = 2; i<n; i++){
        if(n % i === 0)
        return false;
    }
    return true;
}

let printPrime = (n) => {
    for(let i = 2; i<= n; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

printPrime(20)

let revPrint = n => {
    let rev = 0;
    while(n > 0) {
        let num = n % 10;
        rev = (rev * 10) + num;
        n = n/10;
    }
    return rev;
}

console.log(revPrint(123));

let mostFreq = (arr) => {
    let maxCount =0;
    let mostFrqItem;

    for(let i=0; i <arr.length; i++){
        let count =0;
        for(let j=0; j < arr.length; j++){
            if(arr[i] == arr[j])
                count++;
        }
        if(count> maxCount){
            maxCount = count;   
            mostFrqItem = arr[i];
        }
    }
    return mostFrqItem;
}

console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let i = 0; i<arr.length; i++){
    console.log("row ", i);
    let newArr = Array.from(arr[i]);
    for(let j=0; j<newArr.length; j++){
        console.log(newArr[j]);
    }
}

let removeDup = arr => {
    arr.sort();
    for(let i =0; i< arr.length; i++){
        if(arr[i] === arr[i+1])
        arr.splice(i, 1);
    }
    return arr;
}

console.log(removeDup([1,2,3,4,3,2,1]));

let sum = (arr1, arr2) => {
    let newArr = [] ;
    for(let i=0; i < (arr1.length && arr2.length); i++){
        newArr[i] = arr1[i] + arr2[i];
    }

    if( arr1.length > i) {
        for(let j = 1; j< arr1.length; j++)
        newArr[j] = arr
    }
    return newArr;
}

console.log(sum( [1,0,2,3,4],  [3,5,6,7,8,13]))

let removeFalsy = arr => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == false)
            arr.splice(i,1);
    }
    return arr;
}

console.log(removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]))

let targetSum = (arr, target) => {
    let indices = []
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
               indices.push(i);
               indices.push(j);
               return indices;
            }
        }
    }
}

console.log(targetSum([10,20,10,40,50,60,70], 50))

let arr = [2,4,3];

console.log(arr.reduce((total, num ) => total+num));