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