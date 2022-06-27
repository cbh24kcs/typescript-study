export default {};
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}
// 函数表达式（Function Expression）
var mySum = function (x, y) {
    return x + y;
};
function sum1(x, y) {
    return x + y;
}
function sum2(x, y) {
    return x + y;
}
sum2(1, 2, 3);
sum2(1);
var mySum1 = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat1 = buildName('Tom', 'Cat');
var tom1 = buildName('Tom');
function buildName1(firstName, lastName) {
    if (firstName) {
        return firstName + ' ' + lastName;
    }
    else {
        return lastName;
    }
}
var tomcat = buildName1('Tom', 'Cat');
var tom = buildName1(undefined, 'Tom');
