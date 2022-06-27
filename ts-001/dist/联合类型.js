export default {};
var x = 3;
function getLength(something) {
    if (typeof something === 'string') {
        return something.length;
    }
    return something;
}
function getString(something) {
    return something.toString();
}
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
var myFavoriteNumber;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错
