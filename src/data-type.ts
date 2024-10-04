// Anotation di variable
const pi: number = 3.14;
console.log(pi);

// Anotation di function
function hello(name: string) {
    return `Hello, ${name}`;
}
console.log(hello('awan'));  // Hello, awan

// onion type
let text: string | number;
text = 45;
console.log(text);

// interface
interface Person {
    name: string,
    age: number
}

let person: Person;

person = {
    name: 'awan',
    age: 24
}

console.log(person);

// interface extend
interface Employee extends Person {
    employeeId: number;
}

let employee: Employee;

employee = {
    name: 'awan',
    age: 24,
    employeeId: 123
}
console.log(employee);

// interface Declaration Merging
// interface Employee {
//     address: string
// }

type User = {
    name: string;
    age: number;
};
  
type PartialUser = Partial<User>;


