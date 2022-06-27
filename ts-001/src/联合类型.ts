export default {};


let x: number | string = 3;


function getLength(something: string | number): number {
    if(typeof something === 'string') {
        return something.length;
    }
    return something
}

function getString(something: string | number): string {
    return something.toString();
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错



