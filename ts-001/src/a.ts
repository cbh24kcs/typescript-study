let a: string = "Hello";

function fun(s: number | string) {
}

let fun2 = (x: number) => x * x;


fun(a);
fun(3);

interface Person {
    name: string,
    age: number
}

interface Person {
    x: number,
    name: string
}


// interface Student extends Person, A {}


let arr: Array<Person> = [
    {name: '张三', age: 18, x: 3},
]

// 类型推断
let x = 3;

// x = '4'

// ES6 --- 2015
// ...
// ES2022

export default {}
