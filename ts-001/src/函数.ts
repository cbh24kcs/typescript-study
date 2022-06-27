export default {};

// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};

function sum1(x: number, y: number): number {
    return x + y;
}

function sum2(x: number, y: number): number {
    return x + y;
}
sum2(1, 2, 3);
sum2(1);

let mySum1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat1 = buildName('Tom', 'Cat');
let tom1= buildName('Tom');

function buildName1(firstName?: string, lastName: string) {
    if (firstName) {
        return firstName + ' ' + lastName;
    } else {
        return lastName;
    }
}
let tomcat = buildName1('Tom', 'Cat');
let tom = buildName1(undefined, 'Tom');