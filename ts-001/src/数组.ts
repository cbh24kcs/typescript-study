export default {};

let fibonacci: number[] = [1, 1, 2, 3, 5];
let fibonacci2: number[] = [1, '1', 2, 3, 5];
let fibonacci3: number[] = [1, 1, 2, 3, 5];
fibonacci3.push('8');

let fibonacci4: Array<number> = [1, 1, 2, 3, 5];


interface NumberArray {
    [index: number]: number;
}
let fibonacci5: NumberArray = [1, 1, 2, 3, 5];

function sum() {
    let args: number[] = arguments;
}

function sum2() {
    // arguments 是类数组(是类似数组、不是类的数组)
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}

function sum3() {
    let args: IArguments = arguments;
}

let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];